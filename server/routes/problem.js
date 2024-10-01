const router = require('express').Router();
let Problem = require('../models/problem.model');

// Get all problems
router.route('/').get((req, res) => {
  Problem.find()
    .then(problems => res.json(problems))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Add a new problem
router.route('/add').post((req, res) => {
  const { title, description, difficulty, category } = req.body;

  const newProblem = new Problem({
    title,
    description,
    difficulty,
    category
  });

  newProblem.save()
    .then(() => res.json('Problem added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Get a specific problem
router.route('/:id').get((req, res) => {
  Problem.findById(req.params.id)
    .then(problem => res.json(problem))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;