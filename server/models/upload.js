const mongoose = require("mongoose");

const cvSchema = new mongoose.Schema({
  originalName: {
    type: String,
    required: true,
  },
  cloudinaryUrl: {
    type: String,
    required: true,
  },
  extractedText: {
    type: String,
  },
  uploadedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("CV", cvSchema);
