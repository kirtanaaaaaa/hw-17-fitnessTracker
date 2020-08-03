const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutsSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: 
  [
    {
      type: {
        type: String,
        trim: true,
        required: "Enter type of exercise"
      },
      name: {
        type: String,
        trim: true,
        required: "Exercise name."
      },
      duration: {
        type: Number,
        required: "How long was the workout?"
      },
      distance: {
        type: Number,
        required: "what was the distance"
      },
      reps: {
        type: Number,
        required:"amount of reps"
      },
      sets: {
        type: Number,
        required: "amount of sets"
      },
      weight: {
        type: Number,
        required: "enter weight"
      }
    }
  ]
});

const Workouts = mongoose.model("Workouts", workoutsSchema);

module.exports = Workouts;