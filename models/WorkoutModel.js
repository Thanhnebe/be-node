const mongoose = require('mongoose');

const workoutPlanSchema = new mongoose.Schema({
  user_id: {
    type: Number,
    required: true,
  },
  plan_details: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  goal: {
    type: String,
    enum: ['Weight Loss', 'Muscle Gain', 'Maintenance'],
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  }
});

// Middleware to update the updated_at field before saving the document
workoutPlanSchema.pre('save', function(next) {
  this.updated_at = Date.now();
  next();
});

const WorkoutPlan = mongoose.model('WorkoutPlan', workoutPlanSchema);

module.exports = WorkoutPlan;
