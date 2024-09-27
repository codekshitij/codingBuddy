const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const problemSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    auto: true
  },
  title: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  difficulty: {
    type: String,
    required: true,
    enum: ['Easy', 'Medium', 'Hard']
  },
  category: {
    type: String,
    required: true
  },
  // Reference to submissions
  submissions: [{
    type: Schema.Types.ObjectId,
    ref: 'Submission'
  }]
}, {
  timestamps: true
});

const Problem = mongoose.model('Problem', problemSchema);

module.exports = Problem;