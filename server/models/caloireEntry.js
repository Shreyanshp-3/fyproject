// models/CalorieEntry.js
const mongoose = require('mongoose');

const calorieEntrySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  foodName: {
    type: String,
    required: true,
  },
  calories: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const CalorieEntry = mongoose.model('CalorieEntry', calorieEntrySchema);

module.exports = CalorieEntry;
