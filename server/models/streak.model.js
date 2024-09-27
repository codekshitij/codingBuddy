const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const streakSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true
  },
  currentStreak: {
    type: Number,
    default: 0
  },
  lastSubmissionDate: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

const Streak = mongoose.model('Streak', streakSchema);

module.exports = Streak;