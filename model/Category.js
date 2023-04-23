const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  categoryName: String,
  description: String,
  categoryId: String,
});

module.exports = mongoose.model("Category", categorySchema);
