const router = require("express").Router();
const Deal = require("../models/Deal");

router.get("/", async (req, res) => {
  const deals = await Deal.find();
  res.json(deals);
});

router.get("/:id", async (req, res) => {
  const deal = await Deal.findById(req.params.id);
  res.json(deal);
});

module.exports = router;
