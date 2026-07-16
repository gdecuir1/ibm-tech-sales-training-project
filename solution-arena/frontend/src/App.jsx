import { useState } from 'react'
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import NewHomePage from './components/Landing/NewHomePage'
import DashboardPage from './pages/DashboardPage'
import HomePage from './pages/HomePage'
import ScenarioPage from './pages/ScenarioPage'
import InteractiveScenarioPage from './pages/InteractiveScenarioPage'
import ObjectionPage from './pages/ObjectionPage'
import ResultsPage from './pages/ResultsPage'
import IdealAnswerPage from './pages/IdealAnswerPage'
import ProductLibraryPage from './pages/ProductLibraryPage'
import ProductDetailPage from './pages/ProductDetailPage'
import ScenarioLibraryPage from './pages/ScenarioLibraryPage'
import ScenarioExecutionPage from './pages/ScenarioExecutionPage'
import ScenarioRecommendationPage from './pages/ScenarioRecommendationPage'
import ScenarioResultsPage from './pages/ScenarioResultsPage'

function App() {
  const [currentScenario, setCurrentScenario] = useState(null)
  const [selectedProducts, setSelectedProducts] = useState([])
  const [justification, setJustification] = useState('')
  const [objections, setObjections] = useState([])
  const [userResponse, setUserResponse] = useState('')
  const [scores, setScores] = useState(null)

  const resetState = () => {
    setCurrentScenario(null)
    setSelectedProducts([])
    setJustification('')
    setObjections([])
    setUserResponse('')
    setScores(null)
  }

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={<NewHomePage />}
          />
          <Route
            path="/dashboard"
            element={<DashboardPage />}
          />
          <Route
            path="/home-classic"
            element={<HomePage onStart={resetState} />}
          />
          <Route
            path="/interactive"
            element={<InteractiveScenarioPage />}
          />
          <Route
            path="/scenario"
            element={
              <ScenarioPage
                currentScenario={currentScenario}
                setCurrentScenario={setCurrentScenario}
                selectedProducts={selectedProducts}
                setSelectedProducts={setSelectedProducts}
                justification={justification}
                setJustification={setJustification}
                setObjections={setObjections}
              />
            }
          />
          <Route 
            path="/objections" 
            element={
              <ObjectionPage 
                objections={objections}
                userResponse={userResponse}
                setUserResponse={setUserResponse}
                currentScenario={currentScenario}
                selectedProducts={selectedProducts}
                justification={justification}
                setScores={setScores}
              />
            } 
          />
          <Route 
            path="/results" 
            element={
              <ResultsPage 
                scores={scores}
                currentScenario={currentScenario}
              />
            } 
          />
          <Route
            path="/ideal-answer"
            element={
              <IdealAnswerPage
                currentScenario={currentScenario}
                scores={scores}
              />
            }
          />
          <Route
            path="/products"
            element={<ProductLibraryPage />}
          />
          <Route
            path="/products/:productId"
            element={<ProductDetailPage />}
          />
          <Route
            path="/scenarios"
            element={<ScenarioLibraryPage />}
          />
          <Route
            path="/scenarios/:scenarioId"
            element={<ScenarioExecutionPage />}
          />
          <Route
            path="/scenarios/:scenarioId/recommendation"
            element={<ScenarioRecommendationPage />}
          />
          <Route
            path="/scenarios/:scenarioId/results"
            element={<ScenarioResultsPage />}
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

// Made with Bob
