import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getScenarioById } from '../data/scenarios/index';
import { startScenarioSession, submitDiscoveryAnswer } from '../services/scenarioEngine';
import PageHeader from '../components/Primitives/PageHeader';

/**
 * ScenarioExecutionPage - Interactive scenario training interface
 * 
 * Phases:
 * 1. Discovery - Ask questions to understand customer needs
 * 2. Objections - Handle customer concerns
 * 3. Recommendation - Select and present IBM products
 * 4. Results - View scoring and feedback
 */
export default function ScenarioExecutionPage() {
  const { scenarioId } = useParams();
  const navigate = useNavigate();
  
  // State management
  const [scenario, setScenario] = useState(null);
  const [session, setSession] = useState(null);
  const [currentPhase, setCurrentPhase] = useState('discovery');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [answers, setAnswers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showHint, setShowHint] = useState(false);

  // Load scenario and start session
  useEffect(() => {
    try {
      const scenarioData = getScenarioById(scenarioId);
      
      if (!scenarioData) {
        setError('Scenario not found');
        setLoading(false);
        return;
      }

      setScenario(scenarioData);
      
      // Start new session
      const newSession = startScenarioSession(scenarioId);
      setSession(newSession);
      
      setLoading(false);
    } catch (err) {
      console.error('Error loading scenario:', err);
      setError('Failed to load scenario');
      setLoading(false);
    }
  }, [scenarioId]);

  // Handle answer submission
  const handleSubmitAnswer = () => {
    if (!userAnswer.trim()) {
      alert('Please enter an answer before submitting.');
      return;
    }

    const currentQuestion = scenario.discoveryPhase.questions[currentQuestionIndex];
    
    // Submit answer to engine
    const result = submitDiscoveryAnswer(
      session.sessionId,
      currentQuestion.id,
      userAnswer
    );

    // Store answer
    const newAnswer = {
      questionId: currentQuestion.id,
      question: currentQuestion.question,
      userAnswer: userAnswer,
      score: result.score,
      feedback: result.feedback,
      timestamp: new Date().toISOString()
    };

    setAnswers([...answers, newAnswer]);

    // Move to next question or phase
    if (currentQuestionIndex < scenario.discoveryPhase.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setUserAnswer('');
      setShowHint(false);
    } else {
      // Discovery phase complete, move to objections
      setCurrentPhase('objections');
      setCurrentQuestionIndex(0);
      setUserAnswer('');
      setShowHint(false);
    }
  };

  // Handle skip question
  const handleSkipQuestion = () => {
    const currentQuestion = scenario.discoveryPhase.questions[currentQuestionIndex];
    
    const skippedAnswer = {
      questionId: currentQuestion.id,
      question: currentQuestion.question,
      userAnswer: '[Skipped]',
      score: 0,
      feedback: 'Question skipped - no points awarded',
      timestamp: new Date().toISOString()
    };

    setAnswers([...answers, skippedAnswer]);

    if (currentQuestionIndex < scenario.discoveryPhase.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setUserAnswer('');
      setShowHint(false);
    } else {
      setCurrentPhase('objections');
      setCurrentQuestionIndex(0);
      setUserAnswer('');
      setShowHint(false);
    }
  };

  // Handle exit scenario
  const handleExit = () => {
    if (confirm('Are you sure you want to exit? Your progress will be lost.')) {
      navigate('/scenarios');
    }
  };

  // Render loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-slate-600">Loading scenario...</p>
        </div>
      </div>
    );
  }

  // Render error state
  if (error || !scenario) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-8">
          <div className="text-red-500 text-6xl mb-4 font-mono font-bold">!</div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Scenario Not Found</h2>
          <p className="text-slate-600 mb-6">{error || 'The requested scenario could not be loaded.'}</p>
          <button
            onClick={() => navigate('/scenarios')}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Scenarios
          </button>
        </div>
      </div>
    );
  }

  // Get current question based on phase
  const getCurrentQuestion = () => {
    if (currentPhase === 'discovery') {
      return scenario.discoveryPhase.questions[currentQuestionIndex];
    } else if (currentPhase === 'objections') {
      return scenario.objectionPhase.objections[currentQuestionIndex];
    }
    return null;
  };

  const currentQuestion = getCurrentQuestion();
  const totalQuestions = currentPhase === 'discovery' 
    ? scenario.discoveryPhase.questions.length 
    : scenario.objectionPhase.objections.length;
  const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;

  // Render objection handling phase
  if (currentPhase === 'objections') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <PageHeader
          title="Objection Handling"
          subtitle={scenario.title}
          breadcrumbs={[
            { label: 'Scenarios', path: '/scenarios' },
            { label: scenario.title, path: `/scenarios/${scenarioId}` },
            { label: 'Objections' }
          ]}
        />

        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-slate-700">
                Objection {currentQuestionIndex + 1} of {totalQuestions}
              </span>
              <span className="text-sm text-slate-600">
                {Math.round(progress)}% Complete
              </span>
            </div>
            <div className="w-full bg-slate-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Objection Card */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                <span className="text-2xl font-mono font-bold text-orange-600">!</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Customer Objection
                </h3>
                <p className="text-lg text-slate-700 leading-relaxed">
                  "{currentQuestion.objection}"
                </p>
              </div>
            </div>

            {/* Context */}
            <div className="bg-slate-50 rounded-lg p-4 mb-6">
              <p className="text-sm text-slate-600">
                <strong>Context:</strong> {currentQuestion.context}
              </p>
            </div>

            {/* Answer Input */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Your Response
              </label>
              <textarea
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                placeholder="How would you address this objection? Focus on value, evidence, and addressing the root concern..."
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                rows={6}
              />
              <p className="text-sm text-slate-500 mt-2">
                Tip: Use the LAER framework - Listen, Acknowledge, Explore, Respond
              </p>
            </div>

            {/* Hint Section */}
            {showHint && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <div className="flex items-start gap-3">
                  <span className="text-2xl font-mono font-bold text-blue-600">i</span>
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-1">Hint</h4>
                    <p className="text-sm text-blue-800">{currentQuestion.hint}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex gap-3">
              <button
                onClick={handleSubmitAnswer}
                disabled={!userAnswer.trim()}
                className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-slate-300 disabled:cursor-not-allowed transition-colors font-medium"
              >
                Submit Response
              </button>
              {!showHint && (
                <button
                  onClick={() => setShowHint(true)}
                  className="px-6 py-3 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors"
                >
                  Show Hint
                </button>
              )}
              <button
                onClick={handleSkipQuestion}
                className="px-6 py-3 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors"
              >
                Skip
              </button>
            </div>
          </div>

          {/* Exit Button */}
          <div className="text-center">
            <button
              onClick={handleExit}
              className="text-slate-600 hover:text-slate-900 text-sm"
            >
              Exit Scenario
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Render discovery phase (default)
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <PageHeader
        title="Discovery Phase"
        subtitle={scenario.title}
        breadcrumbs={[
          { label: 'Scenarios', path: '/scenarios' },
          { label: scenario.title, path: `/scenarios/${scenarioId}` },
          { label: 'Discovery' }
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-slate-700">
              Question {currentQuestionIndex + 1} of {totalQuestions}
            </span>
            <span className="text-sm text-slate-600">
              {Math.round(progress)}% Complete
            </span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
          <div className="flex items-start gap-4 mb-6">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-2xl font-mono font-bold text-blue-600">?</span>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Discovery Question
              </h3>
              <p className="text-lg text-slate-700 leading-relaxed">
                {currentQuestion.question}
              </p>
            </div>
          </div>

          {/* Category Badge */}
          <div className="mb-6">
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
              {currentQuestion.category}
            </span>
          </div>

          {/* Answer Input */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Your Answer
            </label>
            <textarea
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              placeholder="Enter your discovery question or response here..."
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              rows={6}
            />
            <p className="text-sm text-slate-500 mt-2">
              Focus on understanding the customer's needs, challenges, and goals.
            </p>
          </div>

          {/* Hint Section */}
          {showHint && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <div className="flex items-start gap-3">
                <span className="text-2xl font-mono font-bold text-blue-600">i</span>
                <div>
                  <h4 className="font-semibold text-blue-900 mb-1">Hint</h4>
                  <p className="text-sm text-blue-800">{currentQuestion.hint}</p>
                </div>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button
              onClick={handleSubmitAnswer}
              disabled={!userAnswer.trim()}
              className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-slate-300 disabled:cursor-not-allowed transition-colors font-medium"
            >
              Submit Answer
            </button>
            {!showHint && (
              <button
                onClick={() => setShowHint(true)}
                className="px-6 py-3 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors"
              >
                Show Hint
              </button>
            )}
            <button
              onClick={handleSkipQuestion}
              className="px-6 py-3 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors"
            >
              Skip
            </button>
          </div>
        </div>

        {/* Progress Summary */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h4 className="font-semibold text-slate-900 mb-3">Your Progress</h4>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{answers.length}</div>
              <div className="text-sm text-slate-600">Answered</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-slate-400">
                {totalQuestions - answers.length - 1}
              </div>
              <div className="text-sm text-slate-600">Remaining</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">
                {Math.round((answers.reduce((sum, a) => sum + a.score, 0) / answers.length) * 100) || 0}%
              </div>
              <div className="text-sm text-slate-600">Avg Score</div>
            </div>
          </div>
        </div>

        {/* Exit Button */}
        <div className="text-center">
          <button
            onClick={handleExit}
            className="text-slate-600 hover:text-slate-900 text-sm"
          >
            Exit Scenario
          </button>
        </div>
      </div>
    </div>
  );
}

// Made with Bob
