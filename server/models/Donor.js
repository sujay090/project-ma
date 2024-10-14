const mongoose = require('mongoose');
const donorSchema = new mongoose.Schema({
  name: String,
  email: String,
  amount: Number,
  paymentMethod: String,
});
module.exports = mongoose.model('Donor', donorSchema);
