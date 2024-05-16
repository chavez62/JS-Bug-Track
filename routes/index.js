const express = require('express');
const router = express.Router();

let bugs = [
  { id: 1, title: 'IAP', module: 'Autozone', description: 'Issue with payment gateway', reporter: 'Alice', dateReported: '2024-05-10', steps: '1. Go to payment page\n2. Enter card details\n3. Click pay', expectedBehavior: 'Payment should process', actualBehavior: 'Error message displayed', severity: 'Low', status: 'Pending', priority: 'Low' },
  { id: 2, title: 'Other Interface', module: 'WorldPac', description: 'Login issue', reporter: 'Bob', dateReported: '2024-05-11', steps: '1. Go to login page\n2. Enter credentials\n3. Click login', expectedBehavior: 'Should login', actualBehavior: 'Error message displayed', severity: 'High', status: 'Pending', priority: 'High' },
  { id: 3, title: 'WorldPac', module: 'WorldPac', description: 'Page load issue', reporter: 'Charlie', dateReported: '2024-05-12', steps: '1. Go to home page\n2. Page loads', expectedBehavior: 'Should load quickly', actualBehavior: 'Takes too long', severity: 'High', status: 'Pending', priority: 'High' },
];

// Home route
router.get('/', (req, res) => {
  const filter = req.query.filter;
  let filteredBugs = bugs;

  if (filter) {
    const filterLower = filter.toLowerCase();
    filteredBugs = bugs.filter(bug =>
      bug.title.toLowerCase().includes(filterLower) ||
      bug.module.toLowerCase().includes(filterLower) ||
      bug.description.toLowerCase().includes(filterLower) ||
      bug.reporter.toLowerCase().includes(filterLower) ||
      bug.steps.toLowerCase().includes(filterLower) ||
      bug.expectedBehavior.toLowerCase().includes(filterLower) ||
      bug.actualBehavior.toLowerCase().includes(filterLower) ||
      bug.severity.toLowerCase().includes(filterLower) ||
      bug.status.toLowerCase().includes(filterLower) ||
      bug.priority.toLowerCase().includes(filterLower)
    );
  }

  res.render('index', { bugs: filteredBugs });
});

// Create new bug
router.get('/create', (req, res) => {
  res.render('create');
});

router.post('/create', (req, res) => {
  const { title, module, description, reporter, dateReported, steps, expectedBehavior, actualBehavior, severity, status, priority } = req.body;
  const id = bugs.length + 1;
  bugs.push({ id, title, module, description, reporter, dateReported, steps, expectedBehavior, actualBehavior, severity, status, priority });
  res.redirect('/');
});

// Edit bug
router.get('/edit/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const bug = bugs.find(bug => bug.id === id);
  res.render('edit', { bug });
});

router.post('/edit/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { title, module, description, reporter, dateReported, steps, expectedBehavior, actualBehavior, severity, status, priority } = req.body;
  const bugIndex = bugs.findIndex(bug => bug.id === id);
  bugs[bugIndex] = { id, title, module, description, reporter, dateReported, steps, expectedBehavior, actualBehavior, severity, status, priority };
  res.redirect('/');
});

// Delete bug
router.post('/delete/:id', (req, res) => {
  const id = parseInt(req.params.id);
  bugs = bugs.filter(bug => bug.id !== id);
  res.redirect('/');
});

module.exports = router;
