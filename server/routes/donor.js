const express = require("express");
const router = express.Router();
const Donor = require("../models/Donor"); // Assuming you have a Donor model

// Route to fetch all donors
router.get("/donors", async (req, res) => {
  try {
    const donors = await Donor.find(); // Fetch all donors from the database
    res.status(200).json(donors);
  } catch (error) {
    res.status(500).json({ message: "Error fetching donors", error });
  }
});

module.exports = router;
