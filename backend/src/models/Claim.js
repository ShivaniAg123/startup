const mongoose = require("mongoose");

const claimSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  dealId: { type: mongoose.Schema.Types.ObjectId, ref: "Deal" },
  status: { type: String, default: "pending" }
});

module.exports = mongoose.model("Claim", claimSchema);
