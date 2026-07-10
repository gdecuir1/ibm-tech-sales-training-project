# 🚀 SOLUTION ARENA - RUNNING INSTRUCTIONS

## Complete Setup and Execution Guide

### Prerequisites Check

Before starting, ensure you have:
- **Node.js** version 16 or higher (`node --version`)
- **npm** version 7 or higher (`npm --version`)

---

## 📦 STEP 1: Install Dependencies

### Backend Installation

Open a terminal and navigate to the backend directory:

```bash
cd solution-arena/backend
npm install
```

This will install:
- express (^4.18.2)
- cors (^2.8.5)

### Frontend Installation

Open a **NEW** terminal (keep backend terminal open) and navigate to the frontend directory:

```bash
cd solution-arena/frontend
npm install
```

This will install:
- react (^18.2.0)
- react-dom (^18.2.0)
- react-router-dom (^6.20.0)
- vite (^5.0.8)
- @vitejs/plugin-react (^4.2.1)

---

## 🎯 STEP 2: Start the Backend Server

In the **backend terminal**, run:

```bash
node server.js
```

You should see:

```
🚀 Solution Arena Backend Server
📡 Server running on http://localhost:5000
✅ API endpoints available at http://localhost:5000/

Available routes:
  GET  /scenario/random
  GET  /scenario/:id
  GET  /products
  POST /evaluate/products
  POST /evaluate/response
  POST /objections/generate
```

**✅ Backend is ready when you see this output!**

**Important:** Keep this terminal running. Do NOT close it.

---

## 🎨 STEP 3: Start the Frontend Application

In the **frontend terminal**, run:

```bash
npm run dev
```

You should see:

```
VITE v5.0.8  ready in XXX ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
➜  press h to show help
```

**✅ Frontend is ready when you see this output!**

---

## 🌐 STEP 4: Open the Application

Open your web browser and navigate to:

```
http://localhost:5173
```

You should see the **Solution Arena** home page with:
- Title: "Solution Arena"
- Subtitle: "IBM BTS Scenario Simulator"
- Welcome message
- "Start Scenario" button

---

## 🎮 STEP 5: Use the Application

### Workflow:

1. **Home Page** → Click "Start Scenario"
2. **Scenario Page** → 
   - Review company context
   - Select IBM products (check boxes)
   - Write justification
   - Click "Submit Solutions"
3. **Objection Page** →
   - Read customer objections
   - Write your response
   - Click "Submit Response"
4. **Results Page** →
   - View your scores
   - Review feedback
   - Click "Reveal Ideal Answer"
5. **Ideal Answer Page** →
   - Study recommended products
   - Read sample response
   - Click "Try Another Scenario"

---

## 🔍 Verification Checklist

### Backend Verification

Test the backend is working:

```bash
curl http://localhost:5000/health
```

Expected response:
```json
{"status":"ok","message":"Solution Arena API is running"}
```

### Frontend Verification

1. Open browser to `http://localhost:5173`
2. Check browser console (F12) for errors
3. Click "Start Scenario" - should load a scenario
4. Verify products load in the multi-select

---

## 🛑 Stopping the Application

### Stop Frontend
In the frontend terminal, press: `Ctrl + C`

### Stop Backend
In the backend terminal, press: `Ctrl + C`

---

## 🔧 Troubleshooting

### Port Already in Use

**Backend (Port 5000):**
```bash
# Find process using port 5000
lsof -i :5000

# Kill the process
kill -9 <PID>
```

**Frontend (Port 5173):**
```bash
# Find process using port 5173
lsof -i :5173

# Kill the process
kill -9 <PID>
```

### Module Not Found Errors

```bash
# Backend
cd solution-arena/backend
rm -rf node_modules package-lock.json
npm install

# Frontend
cd solution-arena/frontend
rm -rf node_modules package-lock.json
npm install
```

### API Connection Errors

1. Verify backend is running on port 5000
2. Check browser console for CORS errors
3. Ensure both servers are running simultaneously
4. Try refreshing the browser page

### Blank Page or White Screen

1. Check browser console (F12) for errors
2. Verify frontend terminal shows no errors
3. Clear browser cache and reload
4. Ensure all files were created correctly

---

## 📊 Testing the System

### Test Scenario Flow

1. Start both servers
2. Navigate to `http://localhost:5173`
3. Click "Start Scenario"
4. Select 2-3 products (e.g., IBM WatsonX, IBM Turbonomic)
5. Write justification: "These products address the cost and AI challenges"
6. Submit and verify objections appear
7. Write response: "I understand your concerns about cost. IBM provides ROI through efficiency gains and proven results in your industry."
8. Submit and verify scores appear
9. Check that all scores are between 0-100
10. Click "Reveal Ideal Answer"
11. Verify ideal products and sample response display

### Expected Behavior

- ✅ Scenarios load randomly
- ✅ Products can be selected/deselected
- ✅ Objections are generated based on tech stack
- ✅ Scores are deterministic (same input = same output)
- ✅ Feedback is specific and actionable
- ✅ Navigation works between all pages

---

## 🎯 Quick Start (Copy-Paste Commands)

### Terminal 1 (Backend):
```bash
cd solution-arena/backend
npm install
node server.js
```

### Terminal 2 (Frontend):
```bash
cd solution-arena/frontend
npm install
npm run dev
```

### Browser:
```
http://localhost:5173
```

---

## ✅ Success Indicators

You'll know everything is working when:

1. ✅ Backend terminal shows "Server running on http://localhost:5000"
2. ✅ Frontend terminal shows "Local: http://localhost:5173/"
3. ✅ Browser loads the home page without errors
4. ✅ Clicking "Start Scenario" loads a company scenario
5. ✅ Products appear in the selection list
6. ✅ Submitting solutions generates objections
7. ✅ Submitting response shows scores
8. ✅ All scores are numbers between 0-100

---

## 📞 Support

If you encounter issues:

1. Check both terminals for error messages
2. Verify Node.js version: `node --version` (should be v16+)
3. Ensure ports 5000 and 5173 are available
4. Review the troubleshooting section above
5. Check browser console (F12) for JavaScript errors

---

## 🎓 Ready to Train!

Once both servers are running and the browser loads successfully, you're ready to practice IBM BTS scenarios!

**Happy Training! 🚀**