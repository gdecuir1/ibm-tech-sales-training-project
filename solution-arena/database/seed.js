// Database Seeding Script for IBM Tech Sales Training Platform
// This script populates the database with initial data from JSON files

const { Pool } = require('pg');
const fs = require('fs');
const path = require('path');

// Database connection configuration
const pool = new Pool({
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 5432,
  database: process.env.DB_NAME || 'dealsprint',
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD,
});

// Load JSON data files
const loadJSONFile = (filename) => {
  const filePath = path.join(__dirname, '..', 'shared-data', filename);
  const data = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(data);
};

// Seed products
async function seedProducts() {
  console.log('Seeding products...');
  const products = loadJSONFile('products.json');
  
  for (const product of products) {
    await pool.query(
      `INSERT INTO products (
        id, name, category, subcategory, description, 
        use_cases, strengths, keywords
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
      ON CONFLICT (id) DO UPDATE SET
        name = EXCLUDED.name,
        category = EXCLUDED.category,
        subcategory = EXCLUDED.subcategory,
        description = EXCLUDED.description,
        use_cases = EXCLUDED.use_cases,
        strengths = EXCLUDED.strengths,
        keywords = EXCLUDED.keywords,
        updated_at = CURRENT_TIMESTAMP`,
      [
        product.id,
        product.name,
        product.category,
        product.subcategory || null,
        product.description || null,
        product.use_cases || [],
        product.strengths || [],
        product.keywords || []
      ]
    );
  }
  
  console.log(`✓ Seeded ${products.length} products`);
}

// Seed objections
async function seedObjections() {
  console.log('Seeding objections...');
  const objections = loadJSONFile('objections.json');
  
  for (const objection of objections) {
    await pool.query(
      `INSERT INTO objections (trigger, objection, type)
       VALUES ($1, $2, $3)
       ON CONFLICT DO NOTHING`,
      [objection.trigger, objection.objection, objection.type]
    );
  }
  
  console.log(`✓ Seeded ${objections.length} objections`);
}

// Seed scenarios
async function seedScenarios() {
  console.log('Seeding scenarios...');
  const scenarios = loadJSONFile('scenarios.json');
  
  for (const scenario of scenarios) {
    // Insert scenario
    await pool.query(
      `INSERT INTO scenarios (
        id, title, difficulty, estimated_time, company, industry,
        size, revenue, employees, brief, current_environment,
        business_goals, constraints, ideal_solution, scoring_breakdown
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)
      ON CONFLICT (id) DO UPDATE SET
        title = EXCLUDED.title,
        difficulty = EXCLUDED.difficulty,
        estimated_time = EXCLUDED.estimated_time,
        company = EXCLUDED.company,
        industry = EXCLUDED.industry,
        size = EXCLUDED.size,
        revenue = EXCLUDED.revenue,
        employees = EXCLUDED.employees,
        brief = EXCLUDED.brief,
        current_environment = EXCLUDED.current_environment,
        business_goals = EXCLUDED.business_goals,
        constraints = EXCLUDED.constraints,
        ideal_solution = EXCLUDED.ideal_solution,
        scoring_breakdown = EXCLUDED.scoring_breakdown,
        updated_at = CURRENT_TIMESTAMP`,
      [
        scenario.id,
        scenario.title,
        scenario.difficulty,
        scenario.estimatedTime || null,
        scenario.company || null,
        scenario.industry,
        scenario.size || null,
        scenario.revenue || null,
        scenario.employees || null,
        scenario.brief || null,
        JSON.stringify(scenario.currentEnvironment || {}),
        scenario.businessGoals || [],
        JSON.stringify(scenario.constraints || {}),
        JSON.stringify(scenario.idealSolution || {}),
        JSON.stringify(scenario.scoringBreakdown || {})
      ]
    );
    
    // Insert scenario questions
    if (scenario.questions && Array.isArray(scenario.questions)) {
      for (let i = 0; i < scenario.questions.length; i++) {
        const question = scenario.questions[i];
        await pool.query(
          `INSERT INTO scenario_questions (
            id, scenario_id, question_order, type, step, title,
            question, objection, multiple_choice, options, feedback
          ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
          ON CONFLICT (id) DO UPDATE SET
            question_order = EXCLUDED.question_order,
            type = EXCLUDED.type,
            step = EXCLUDED.step,
            title = EXCLUDED.title,
            question = EXCLUDED.question,
            objection = EXCLUDED.objection,
            multiple_choice = EXCLUDED.multiple_choice,
            options = EXCLUDED.options,
            feedback = EXCLUDED.feedback`,
          [
            question.id,
            scenario.id,
            i + 1,
            question.type,
            question.step || 1,
            question.title || '',
            question.question,
            question.objection || null,
            question.multipleChoice !== false,
            JSON.stringify(question.options || []),
            JSON.stringify(question.feedback || {})
          ]
        );
      }
    }
  }
  
  console.log(`✓ Seeded ${scenarios.length} scenarios`);
}

// Seed demo user
async function seedDemoUser() {
  console.log('Seeding demo user...');
  
  // Use environment variable or generate secure password
  // In production, always use bcrypt for password hashing
  const demoPassword = process.env.DEMO_PASSWORD;
  
  await pool.query(
    `INSERT INTO users (email, username, password_hash, first_name, last_name, role)
     VALUES ($1, $2, $3, $4, $5, $6)
     ON CONFLICT (email) DO NOTHING`,
    ['demo@ibm.com', 'demo', demoPassword, 'Demo', 'User', 'learner']
  );
  
  console.log('✓ Seeded demo user (email: demo@ibm.com, password: set via DEMO_PASSWORD env var)');
}

// Main seeding function
async function seedDatabase() {
  console.log('Starting database seeding...\n');
  
  try {
    await seedProducts();
    await seedObjections();
    await seedScenarios();
    await seedDemoUser();
    
    console.log('\n✓ Database seeding completed successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
    throw error;
  } finally {
    await pool.end();
  }
}

// Run seeding if called directly
if (require.main === module) {
  seedDatabase()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
}

module.exports = { seedDatabase };

// Made with Bob
