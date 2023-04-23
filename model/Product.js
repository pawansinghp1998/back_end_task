//product api model

const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productName: String,
  description: String,
  categoryId: String,
  productId: String,
});

module.exports = mongoose.model("Product", productSchema);
