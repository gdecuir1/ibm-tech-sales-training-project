# Multiple Choice Refactor Implementation Plan

**Date:** 2026-07-16  
**Goal:** Convert all scenario interactions from free-text to multiple choice for faster progression

## Requirements

- **Discovery Questions:** Multiple select (checkboxes) - Select ALL good questions to ask
- **Objection Responses:** Multiple select (checkboxes) - Select ALL key points to include
- **Keep existing content:** Preserve all scenario details, just add choice options
- **Fast progression:** Users can complete scenarios in 10-15 minutes instead of 30-45 minutes

## Implementation Steps

### Phase 1: Type System Updates ✅ COMPLETE
- [x] Add `AnswerChoice` interface to scenarios.ts
- [x] Add `choices`, `correctChoiceIds`, `minCorrectChoices`, `maxChoices` to DiscoveryQuestion
- [x] Add `responseChoices`, `correctResponseIds`, `minCorrectResponses`, `maxResponses` to ScenarioObjection

### Phase 2: Scenario Data Updates (9 scenarios)
For each scenario, add multiple choice options:

#### Discovery Questions (8 questions per scenario)
Each question needs 5-7 answer choices:
- 3-4 correct choices (good questions to ask)
- 2-3 incorrect choices (poor/irrelevant questions)
- Each choice has: id, text, isCorrect, points, feedback

Example:
```typescript
{
  question: "What should you ask about Epic performance?",
  choices: [
    { id: 'q1-a', text: 'Which Epic modules are slowest?', isCorrect: true, points: 3 },
    { id: 'q1-b', text: 'What are peak usage times?', isCorrect: true, points: 3 },
    { id: 'q1-c', text: 'How many concurrent users?', isCorrect: true, points: 2 },
    { id: 'q1-d', text: 'What color is your logo?', isCorrect: false, points: 0 },
    { id: 'q1-e', text: 'Do you like IBM?', isCorrect: false, points: 0 }
  ],
  correctChoiceIds: ['q1-a', 'q1-b', 'q1-c'],
  minCorrectChoices: 2,
  maxChoices: 5
}
```

#### Objection Responses (5 objections per scenario)
Each objection needs 5-7 response choices:
- 3-4 correct responses (key points to address objection)
- 2-3 incorrect responses (weak/wrong approaches)

Example:
```typescript
{
  objection: "We don't have AIX skills on our team",
  responseChoices: [
    { id: 'o1-a', text: 'IBM Power runs Linux, no AIX required', isCorrect: true, points: 5 },
    { id: 'o1-b', text: 'Your team already knows Linux', isCorrect: true, points: 4 },
    { id: 'o1-c', text: 'IBM offers training and support', isCorrect: true, points: 3 },
    { id: 'o1-d', text: 'AIX is easy to learn', isCorrect: false, points: 0 },
    { id: 'o1-e', text: 'You should hire AIX experts', isCorrect: false, points: 0 }
  ],
  correctResponseIds: ['o1-a', 'o1-b', 'o1-c'],
  minCorrectResponses: 2,
  maxResponses: 5
}
```

#### Scenarios to Update:
1. healthcare-epic-performance-001 (8 questions, 5 objections)
2. banking-fraud-detection-001 (8 questions, 5 objections)
3. banking-digital-banking-002 (8 questions, 5 objections)
4. banking-real-time-payments-003 (8 questions, 5 objections)
5. banking-wealth-management-004 (8 questions, 5 objections)
6. banking-commercial-lending-005 (8 questions, 5 objections)
7. banking-branch-transformation-006 (8 questions, 5 objections)
8. banking-regulatory-compliance-007 (8 questions, 5 objections)
9. banking-customer-data-platform-008 (8 questions, 5 objections)
10. banking-cybersecurity-009 (8 questions, 5 objections)

**Total work:** 9 scenarios × (8 questions + 5 objections) × 6 choices each = ~700 choices to create

### Phase 3: UI Component Updates

#### ScenarioExecutionPage.jsx
Current: `<textarea>` for free-text input  
New: Checkbox list for multiple select

Changes needed:
- Replace textarea with checkbox group
- Track selected choice IDs in state
- Validate min/max selections
- Show immediate feedback on selection
- Display points earned per choice
- Auto-advance when min selections met

#### Visual Design:
```
Question: What should you ask about Epic performance?
Select 2-4 key questions to ask:

☐ Which Epic modules are experiencing slowness?
☐ What are the peak usage times?
☐ How many concurrent users during peak hours?
☐ What color is your company logo?
☐ Do you like working with IBM?

[2 of 4 selected] [Submit Answers →]
```

### Phase 4: Scoring Engine Updates

#### scenarioEngine.js
Current: Text similarity scoring  
New: Multiple choice scoring

Changes needed:
- `submitDiscoveryAnswer()` - Accept array of choice IDs
- Calculate score based on correct/incorrect selections
- Provide feedback for each choice
- Track partial credit
- Update session storage format

Scoring logic:
```javascript
function scoreMultipleChoice(selectedIds, question) {
  let score = 0;
  let feedback = [];
  
  selectedIds.forEach(id => {
    const choice = question.choices.find(c => c.id === id);
    score += choice.points;
    if (choice.isCorrect) {
      feedback.push(`✓ ${choice.text}`);
    } else {
      feedback.push(`✗ ${choice.text} - ${choice.feedback}`);
    }
  });
  
  // Check if minimum correct choices selected
  const correctSelected = selectedIds.filter(id => 
    question.correctChoiceIds.includes(id)
  ).length;
  
  if (correctSelected < question.minCorrectChoices) {
    feedback.push(`⚠ You needed at least ${question.minCorrectChoices} correct answers`);
  }
  
  return { score, feedback, maxScore: calculateMaxScore(question) };
}
```

### Phase 5: Testing & Validation

- [ ] Test single scenario with multiple choice
- [ ] Verify scoring accuracy
- [ ] Test UI responsiveness
- [ ] Verify localStorage compatibility
- [ ] Test on mobile devices
- [ ] Verify all 9 scenarios work
- [ ] Performance test (load time, interaction speed)

### Phase 6: Documentation

- [ ] Update scenario creation guide
- [ ] Document multiple choice format
- [ ] Update test documentation
- [ ] Create user guide for new format

## Estimated Timeline

- Phase 1: Type System ✅ Complete (10 minutes)
- Phase 2: Scenario Data - 4-6 hours (creating ~700 choices)
- Phase 3: UI Components - 2-3 hours
- Phase 4: Scoring Engine - 1-2 hours
- Phase 5: Testing - 1-2 hours
- Phase 6: Documentation - 1 hour

**Total: 9-14 hours of work**

## Approach Options

### Option A: Incremental (Recommended)
1. Update 1 scenario completely (healthcare-001)
2. Update UI and scoring for that scenario
3. Test thoroughly
4. Update remaining 8 scenarios
5. Final testing

**Pros:** Lower risk, can validate approach early  
**Cons:** Takes longer to see full results

### Option B: Batch Update
1. Update all 9 scenarios with choices
2. Update UI and scoring
3. Test everything together

**Pros:** Faster overall completion  
**Cons:** Higher risk, harder to debug

## Decision: Use Option A (Incremental)

Start with healthcare-001 as prototype, validate the approach, then scale to all scenarios.

---

**Made with Bob**