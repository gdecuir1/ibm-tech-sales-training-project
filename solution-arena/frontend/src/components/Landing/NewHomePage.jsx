import { useNavigate } from 'react-router-dom';
import { 
  Target, TrendingUp, BarChart3, Brain, 
  Clock, Users, CheckCircle2, ArrowRight
} from 'lucide-react';

function NewHomePage() {
  const navigate = useNavigate();

  const handleStartTraining = () => {
    navigate('/dashboard');
  };

  const handleViewProgress = () => {
    navigate('/dashboard');
  };

  const handleStartInteractive = () => {
    navigate('/interactive');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-ibm-gray-20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-semibold text-ibm-gray-100">IBM DealSprint</div>
            <button
              onClick={handleViewProgress}
              className="btn-tertiary"
            >
              View Dashboard
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="border-b border-ibm-gray-20">
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-4xl">
            <div className="text-xs uppercase tracking-wide text-ibm-gray-70 font-medium mb-4">
              Sales Training Platform
            </div>
            <h1 className="text-5xl md:text-6xl font-semibold text-ibm-gray-100 mb-6 leading-tight">
              Build stronger IBM solution-selling judgment through focused practice
            </h1>
            <p className="text-xl text-ibm-gray-70 mb-8 max-w-2xl leading-relaxed">
              DealSprint delivers short, adaptive sales scenarios with immediate feedback and measurable skill progression across IBM's portfolio.
            </p>
            <div className="flex items-center gap-4">
              <button
                onClick={handleStartTraining}
                className="btn-primary flex items-center gap-2"
              >
                Start Training
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={handleViewProgress}
                className="btn-secondary"
              >
                View Dashboard
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="border-b border-ibm-gray-20 bg-ibm-gray-10">
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl">
            {[
              { value: '100+', label: 'Scenarios', icon: Target },
              { value: '10', label: 'Industries', icon: Users },
              { value: '7-Step', label: 'Framework', icon: CheckCircle2 },
              { value: '3-6 min', label: 'Practice Sessions', icon: Clock }
            ].map((metric, index) => (
              <div key={index} className="text-center">
                <metric.icon className="w-8 h-8 mx-auto mb-3 text-ibm-blue-60" />
                <div className="text-3xl font-semibold text-ibm-gray-100 mb-1 font-mono">{metric.value}</div>
                <div className="text-sm text-ibm-gray-70">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="border-b border-ibm-gray-20">
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-5xl">
            <h2 className="text-3xl font-semibold text-ibm-gray-100 mb-12">
              How it works
            </h2>
            <div className="grid md:grid-cols-3 gap-12">
              {[
                {
                  number: '01',
                  title: 'Practice',
                  description: 'Choose from 100+ real-world IBM sales scenarios across 10 industries'
                },
                {
                  number: '02',
                  title: 'Receive feedback',
                  description: 'Get instant, detailed coaching on your solution architecture and positioning'
                },
                {
                  number: '03',
                  title: 'Track mastery',
                  description: 'Watch your skills grow with comprehensive analytics and personalized insights'
                }
              ].map((step, index) => (
                <div key={index}>
                  <div className="text-4xl font-mono font-bold text-ibm-blue-60 mb-4">{step.number}</div>
                  <h3 className="text-xl font-semibold text-ibm-gray-100 mb-3">{step.title}</h3>
                  <p className="text-ibm-gray-70 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="border-b border-ibm-gray-20 bg-ibm-gray-10">
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-5xl">
            <h2 className="text-3xl font-semibold text-ibm-gray-100 mb-12">
              Platform capabilities
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Target, title: 'Adaptive difficulty', description: 'AI adjusts challenge level based on your performance' },
                { icon: BarChart3, title: 'Industry mastery', description: 'Track progress across 10 different industries' },
                { icon: TrendingUp, title: 'Performance analytics', description: 'Deep insights into your learning journey' },
                { icon: Brain, title: 'AI recommendations', description: 'Personalized practice suggestions' },
                { icon: CheckCircle2, title: 'Skill tracking', description: 'Measure improvement across core competencies' },
                { icon: Clock, title: 'Efficient practice', description: 'Complete scenarios in 3-6 minutes' }
              ].map((feature, index) => (
                <div key={index} className="bg-white border border-ibm-gray-20 p-6">
                  <feature.icon className="w-8 h-8 text-ibm-blue-60 mb-4" />
                  <h3 className="text-base font-semibold text-ibm-gray-100 mb-2">{feature.title}</h3>
                  <p className="text-sm text-ibm-gray-70">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industry Coverage */}
      <section className="border-b border-ibm-gray-20">
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-5xl">
            <h2 className="text-3xl font-semibold text-ibm-gray-100 mb-12">
              Industry coverage
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {[
                'Retail',
                'Healthcare',
                'Finance',
                'Manufacturing',
                'Government',
                'Education',
                'Energy',
                'Transportation',
                'Media',
                'Telecom'
              ].map((industry, index) => (
                <div
                  key={index}
                  className="border border-ibm-gray-20 p-4 text-center hover:border-ibm-blue-60 transition-colors"
                >
                  <div className="text-sm font-medium text-ibm-gray-100">{industry}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-ibm-blue-100">
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-semibold text-white mb-6">
              Ready to improve your sales skills?
            </h2>
            <p className="text-xl text-ibm-gray-30 mb-8">
              Start your first practice session and see immediate improvement
            </p>
            <button
              onClick={handleStartInteractive}
              className="btn-primary bg-ibm-blue-60 hover:bg-ibm-blue-70 inline-flex items-center gap-2"
            >
              Start Your First Sprint
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-ibm-gray-20">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center text-sm text-ibm-gray-70">
            <p>IBM DealSprint &copy; 2024</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default NewHomePage;

// Made with Bob
