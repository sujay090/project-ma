const express = require('express');
const Contact = require('../models/Contact');
const router = express.Router();

router.post('/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;
  const contact = new Contact({ name, email, subject, message });
  await contact.save();
  res.status(201).json(contact);
});

module.exports = router;
