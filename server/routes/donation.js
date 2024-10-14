const express = require("express");
const Donor = require("../models/Donor");
const router = express.Router();

router.post("/donate", async (req, res) => {
  const { name, email, amount, paymentMethod } = req.body;
  const donor = new Donor({ name, email, amount, paymentMethod });
  await donor.save();
  res.status(201).json(donor);
});

module.exports = router;
