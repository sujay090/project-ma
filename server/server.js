const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const donationRoutes = require("./routes/donation");
const contactRoutes = require("./routes/contact");
const paymentRoutes = require("./routes/payment");
const donorRoutes = require("./routes/donor"); // Import the donors route

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.listen(process.env.PORT || 5000, () =>
  console.log("Server running on port 5000")
);

app.use("/api", paymentRoutes);
app.use("/api", donationRoutes);
app.use("/api", donorRoutes); // API base path
app.use("/api", contactRoutes);
