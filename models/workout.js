const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
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
  },
  {
    toJSON: {
      // include any virtual properties when data is requested
      virtuals: true,
    },
  }
);

// Syntax adding a dynamically created property to schema
workoutSchema.virtual("totalDuration").get(function () {
  // Consolidating the array of exercises down to the sum of their durations
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});
const workouts = mongoose.model("workouts", workoutSchema);

module.exports = workouts;
