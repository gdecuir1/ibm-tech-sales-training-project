/**
 * Database Seed Script
 * Populates database with scenarios, products, and objections
 * Run with: node seed.js
 */

const fs = require('fs');
const path = require('path');
const db = require('../backend/database/connection');
const { Scenario, Product } = require('../backend/database/models');

/**
 * Load JSON data files
 */
function loadData() {
  const scenariosPath = path.join(__dirname, '../shared-data/scenarios.json');
  const productsPath = path.join(__dirname, '../shared-data/products.json');
  const objectionsPath = path.join(__dirname, '../shared-data/objections.json');
  
  const scenarios = JSON.parse(fs.readFileSync(scenariosPath, 'utf8'));
  const products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));
  const objections = JSON.parse(fs.readFileSync(objectionsPath, 'utf8'));
  
  return { scenarios, products, objections };
}

/**
 * Seed products
 */
async function seedProducts(products) {
  console.log('\n📦 Seeding products...');
  let successCount = 0;
  let errorCount = 0;
  
  for (const product of products) {
    try {
      await Product.create(product);
      successCount++;
      console.log(`  ✓ ${product.name}`);
    } catch (error) {
      errorCount++;
      console.error(`  ✗ ${product.name}: ${error.message}`);
    }
  }
  
  console.log(`\n✅ Products seeded: ${successCount} successful, ${errorCount} errors`);
}

/**
 * Seed scenarios
 */
async function seedScenarios(scenarios) {
  console.log('\n🎯 Seeding scenarios...');
  let successCount = 0;
  let errorCount = 0;
  
  for (const scenario of scenarios) {
    try {
      // Add tags based on scenario properties
      const tags = [
        scenario.difficulty,
        scenario.industry,
        scenario.size
      ];
      
      await Scenario.create({
        ...scenario,
        tags
      });
      successCount++;
      console.log(`  ✓ ${scenario.id}: ${scenario.title}`);
    } catch (error) {
      errorCount++;
      console.error(`  ✗ ${scenario.id}: ${error.message}`);
    }
  }
  
  console.log(`\n✅ Scenarios seeded: ${successCount} successful, ${errorCount} errors`);
}

/**
 * Seed objections
 */
async function seedObjections(objections) {
  console.log('\n💬 Seeding objections...');
  let successCount = 0;
  let errorCount = 0;
  
  for (const objection of objections) {
    try {
      const query = `
        INSERT INTO objections (trigger, objection, type)
        VALUES ($1, $2, $3)
        ON CONFLICT DO NOTHING
      `;
      await db.query(query, [objection.trigger, objection.objection, objection.type]);
      successCount++;
      console.log(`  ✓ ${objection.trigger}`);
    } catch (error) {
      errorCount++;
      console.error(`  ✗ ${objection.trigger}: ${error.message}`);
    }
  }
  
  console.log(`\n✅ Objections seeded: ${successCount} successful, ${errorCount} errors`);
}

/**
 * Create sample users for testing
 */
async function seedSampleUsers() {
  console.log('\n👥 Creating sample users...');
  
  const sampleUsers = [
    {
      email: 'demo@ibm.com',
      username: 'demo',
      full_name: 'Demo User',
      role: 'user',
      organization: 'IBM'
    },
    {
      email: 'sales@ibm.com',
      username: 'sales_rep',
      full_name: 'Sales Representative',
      role: 'user',
      organization: 'IBM'
    },
    {
      email: 'manager@ibm.com',
      username: 'sales_manager',
      full_name: 'Sales Manager',
      role: 'manager',
      organization: 'IBM'
    }
  ];
  
  for (const user of sampleUsers) {
    try {
      const query = `
        INSERT INTO users (email, username, full_name, role, organization)
        VALUES ($1, $2, $3, $4, $5)
        ON CONFLICT (email) DO NOTHING
        RETURNING id
      `;
      const result = await db.query(query, [
        user.email,
        user.username,
        user.full_name,
        user.role,
        user.organization
      ]);
      
      if (result.rows.length > 0) {
        // Initialize user progress
        await db.query('INSERT INTO user_progress (user_id) VALUES ($1) ON CONFLICT DO NOTHING', [result.rows[0].id]);
        console.log(`  ✓ ${user.email}`);
      }
    } catch (error) {
      console.error(`  ✗ ${user.email}: ${error.message}`);
    }
  }
  
  console.log('\n✅ Sample users created');
}

/**
 * Verify seeded data
 */
async function verifyData() {
  console.log('\n🔍 Verifying seeded data...');
  
  try {
    const scenarioCount = await db.query('SELECT COUNT(*) FROM scenarios');
    const productCount = await db.query('SELECT COUNT(*) FROM products');
    const objectionCount = await db.query('SELECT COUNT(*) FROM objections');
    const userCount = await db.query('SELECT COUNT(*) FROM users');
    
    console.log(`\n📊 Database Statistics:`);
    console.log(`  Scenarios: ${scenarioCount.rows[0].count}`);
    console.log(`  Products: ${productCount.rows[0].count}`);
    console.log(`  Objections: ${objectionCount.rows[0].count}`);
    console.log(`  Users: ${userCount.rows[0].count}`);
    
    // Get breakdown by difficulty
    const difficultyBreakdown = await db.query(`
      SELECT difficulty, COUNT(*) as count 
      FROM scenarios 
      GROUP BY difficulty 
      ORDER BY difficulty
    `);
    
    console.log(`\n📈 Scenarios by Difficulty:`);
    difficultyBreakdown.rows.forEach(row => {
      console.log(`  ${row.difficulty}: ${row.count}`);
    });
    
    // Get breakdown by industry
    const industryBreakdown = await db.query(`
      SELECT industry, COUNT(*) as count 
      FROM scenarios 
      GROUP BY industry 
      ORDER BY count DESC
      LIMIT 10
    `);
    
    console.log(`\n🏭 Top Industries:`);
    industryBreakdown.rows.forEach(row => {
      console.log(`  ${row.industry}: ${row.count}`);
    });
    
  } catch (error) {
    console.error('Error verifying data:', error);
  }
}

/**
 * Clear existing data (optional)
 */
async function clearData() {
  console.log('\n🗑️  Clearing existing data...');
  
  try {
    await db.query('TRUNCATE TABLE analytics_events CASCADE');
    await db.query('TRUNCATE TABLE user_scenario_history CASCADE');
    await db.query('TRUNCATE TABLE user_scenario_attempts CASCADE');
    await db.query('TRUNCATE TABLE user_progress CASCADE');
    await db.query('TRUNCATE TABLE objections CASCADE');
    await db.query('TRUNCATE TABLE scenarios CASCADE');
    await db.query('TRUNCATE TABLE products CASCADE');
    await db.query('TRUNCATE TABLE users CASCADE');
    
    console.log('✅ Data cleared');
  } catch (error) {
    console.error('Error clearing data:', error);
    throw error;
  }
}

/**
 * Main seed function
 */
async function seed(options = {}) {
  console.log('🌱 IBM DealSprint Database Seeding');
  console.log('=====================================');
  
  try {
    // Test connection
    const connected = await db.testConnection();
    if (!connected) {
      throw new Error('Database connection failed');
    }
    
    // Clear data if requested
    if (options.clear) {
      await clearData();
    }
    
    // Load data
    console.log('\n📂 Loading data files...');
    const { scenarios, products, objections } = loadData();
    console.log(`  Scenarios: ${scenarios.length}`);
    console.log(`  Products: ${products.length}`);
    console.log(`  Objections: ${objections.length}`);
    
    // Seed data
    await seedProducts(products);
    await seedScenarios(scenarios);
    await seedObjections(objections);
    await seedSampleUsers();
    
    // Verify
    await verifyData();
    
    console.log('\n✅ Database seeding completed successfully!');
    console.log('\n💡 Sample login credentials:');
    console.log('   Email: demo@ibm.com');
    console.log('   Email: sales@ibm.com');
    console.log('   Email: manager@ibm.com');
    
  } catch (error) {
    console.error('\n❌ Seeding failed:', error);
    process.exit(1);
  } finally {
    await db.closePool();
  }
}

// Run if called directly
if (require.main === module) {
  const args = process.argv.slice(2);
  const options = {
    clear: args.includes('--clear') || args.includes('-c')
  };
  
  seed(options);
}

module.exports = { seed, clearData, seedProducts, seedScenarios, seedObjections };

// Made with Bob
