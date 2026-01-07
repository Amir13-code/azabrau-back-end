const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const authRoutes = require("./routes/auth.routes");
const productRoutes = require("./routes/product.routes");
const contactRoutes = require("./routes/contact.routes");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected ✅"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.get("/", (req, res) => {
  res.send("AZABRAU Backend is running...");
});

app.use("/api/admin", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/contact", contactRoutes);

module.exports = app;
