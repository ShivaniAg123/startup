const mongoose = require("mongoose");

const dealSchema = new mongoose.Schema({
  title: String,
  description: String,
  category: String,
  partnerName: String,
  eligibility: String,
  isLocked: Boolean
});

module.exports = mongoose.model("Deal", dealSchema);
