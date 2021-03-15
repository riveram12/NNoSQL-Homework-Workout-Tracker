const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutsSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Enter a type of workout.",
      },
      name: {
        type: String,
        trim: true,
        required: "Enter a workout name.",
      },
      duration: {
        type: Number,
        required: "Enter the duration for your workout.",
      },
      weight: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      sets: {
        type: Number,
      },
      distance: {
        type: Number,
      },
    },
  ],
});

const workouts = mongoose.model("workouts", workoutsSchema);

module.exports = workouts;
