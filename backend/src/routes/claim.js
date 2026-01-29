


const router = require("express").Router();
const auth = require("../middleware/auth");
const Claim = require("../models/Claim");
const Deal = require("../models/Deal");
const User = require("../models/User");

router.post("/", auth, async (req, res) => {
  const deal = await Deal.findById(req.body.dealId);
  const user = await User.findById(req.user.id);

  if (deal.isLocked && !user.isVerified) {
    return res.status(403).json({ message: "Verification required" });
  }

  const claim = await Claim.create({
    userId: user._id,
    dealId: deal._id
  });

  res.json(claim);
});

router.get("/my", auth, async (req, res) => {
  const claims = await Claim.find({ userId: req.user.id }).populate("dealId");
  res.json(claims);
});

module.exports = router;
