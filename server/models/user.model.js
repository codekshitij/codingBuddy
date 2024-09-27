const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({

    _id: {
        type: Schema.Types.ObjectId,
        auto: true
      },
    username:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },

    password: {
        type: String,
        required: true,
        minlength: 6,
    },

    registrationDate: {
        type: Date,
        default: Date.now
      },

       // Reference to submissions
  submissions: [{
    type: Schema.Types.ObjectId,
    ref: 'Submission'
  }],
  // Reference to streak
  streak: {
    type: Schema.Types.ObjectId,
    ref: 'Streak'
  },
  // References to achievements
  achievements: [{
    type: Schema.Types.ObjectId,
    ref: 'Achievement'
  }],
  // References to rewards
  rewards: [{
    type: Schema.Types.ObjectId,
    ref: 'Reward'
  }],
  // References to friends
  friends: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  // References to leagues
  leagues: [{
    type: Schema.Types.ObjectId,
    ref: 'League'
  }]
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;