const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Import routes
const scenariosRouter = require('./routes/scenarios');
const productsRouter = require('./routes/products');
const evaluateRouter = require('./routes/evaluate');
const objectionsRouter = require('./routes/objections');
const scoringRouter = require('./routes/scoring');

// Mount routes
app.use('/scenario', scenariosRouter);
app.use('/products', productsRouter);
app.use('/evaluate', evaluateRouter);
app.use('/objections', objectionsRouter);
app.use('/scoring', scoringRouter);

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Solution Arena API is running' });
});

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'Solution Arena API',
    version: '1.0.0',
    endpoints: {
      scenarios: {
        'GET /scenario/random': 'Get a random scenario',
        'GET /scenario/:id': 'Get a specific scenario by ID'
      },
      products: {
        'GET /products': 'Get all available IBM products'
      },
      evaluate: {
        'POST /evaluate/products': 'Evaluate product selection',
        'POST /evaluate/response': 'Evaluate objection response'
      },
      objections: {
        'POST /objections/generate': 'Generate objections for scenario'
      },
      scoring: {
        'POST /scoring/evaluate': 'Evaluate scenario answers and calculate scores',
        'GET /scoring/leaderboard': 'Get leaderboard data'
      }
    }
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({ error: 'Internal server error' });
});

// Start server
app.listen(PORT, () => {
  console.log(`\n🚀 Solution Arena Backend Server`);
  console.log(`📡 Server running on http://localhost:${PORT}`);
  console.log(`✅ API endpoints available at http://localhost:${PORT}/`);
  console.log(`\nAvailable routes:`);
  console.log(`  GET  /scenario/random`);
  console.log(`  GET  /scenario/:id`);
  console.log(`  GET  /products`);
  console.log(`  POST /evaluate/products`);
  console.log(`  POST /evaluate/response`);
  console.log(`  POST /objections/generate`);
  console.log(`  POST /scoring/evaluate`);
  console.log(`  GET  /scoring/leaderboard`);
  console.log(`\n`);
});

module.exports = app;

// Made with Bob
