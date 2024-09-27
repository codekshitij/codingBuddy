const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const problemTrackingSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  problem: {
    type: Schema.Types.ObjectId,
    ref: 'Problem',
    required: true
  },
  isSolved: {
    type: Boolean,
    default: false
  },
  lastAttempted: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

// Compound index to ensure a user can only have one tracking record per problem
problemTrackingSchema.index({ user: 1, problem: 1 }, { unique: true });

const ProblemTracking = mongoose.model('ProblemTracking', problemTrackingSchema);

module.exports = ProblemTracking;