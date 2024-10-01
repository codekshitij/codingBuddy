const router = require('express').Router();
const Submission = require('../models/submission.model');
const Problem = require('../models/problem.model');
const User = require('../models/user.model');

// Get all submissions
router.route('/').get((req, res) => {
  Submission.find()
    .then(submissions => res.json(submissions))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Add a new submission
router.route('/add').post(async (req, res) => {
  try {
    const { userId, problemId, code, language, status } = req.body;

    const newSubmission = new Submission({
      user: userId,
      problem: problemId,
      code,
      language,
      status
    });

    const savedSubmission = await newSubmission.save();

    // Update user's submissions
    await User.findByIdAndUpdate(userId, { $push: { submissions: savedSubmission._id } });

    // Update problem's submissions
    await Problem.findByIdAndUpdate(problemId, { $push: { submissions: savedSubmission._id } });

    res.json('Submission added!');
  } catch (err) {
    res.status(400).json('Error: ' + err);
  }
});

// Get a specific submission
router.route('/:id').get((req, res) => {
  Submission.findById(req.params.id)
    .then(submission => res.json(submission))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;