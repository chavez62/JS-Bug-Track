const mongoose = require('mongoose');

const bugSchema = new mongoose.Schema({
  title: { type: String, required: true },
  module: { type: String, required: true },
  description: { type: String, required: true },
  reporter: { type: String, required: true },
  dateReported: { type: Date, required: true },
  steps: { type: String, required: true },
  expectedBehavior: { type: String, required: true },
  actualBehavior: { type: String, required: true },
  severity: { type: String, required: true },
  status: { type: String, required: true },
  priority: { type: String, required: true }
});

module.exports = mongoose.model('Bug', bugSchema);
