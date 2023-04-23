const Category = require("../model/Category");

//Get All Category
const allCategory = async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (error) {
    res.json({ message: error });
  }
};

//Single Category
const singleCategory = async (req, res) => {
  try {
    const category = await Category.findOne({
      categoryId: req.params.categoryId,
    });
    res.json(category);
  } catch (error) {
    res.json({ message: error });
  }
};

//Add new Category
const addCategory = async (req, res) => {
  const category = new Category({
    categoryName: req.body.categoryName,
    description: req.body.description,
    categoryId: req.body.categoryId,
  });
  try {
    const savedCategory = await category.save();
    res.send(savedCategory);
  } catch (error) {
    res.status(400).send(error);
  }
};

//Update Category
const updateCategory = async (req, res) => {
  try {
    const category = {
      categoryName: req.body.categoryName,
      description: req.body.description,
      categoryId: req.body.categoryId,
    };
    const updatedCategory = await Category.findOneAndUpdate(
      {
        categoryId: req.params.categoryId,
      },
      category
    );
    res.json(updatedCategory);
  } catch (error) {
    res.json({ message: error });
  }
};

//Delete Category
const deleteCategory = async (req, res) => {
  try {
    const removeCategory = await Category.findOneAndDelete({
      categoryId: req.params.categoryId,
    });
    res.json(removeCategory);
  } catch (error) {
    res.json({ message: error });
  }
};

module.exports = {
  allCategory,
  addCategory,
  singleCategory,
  updateCategory,
  deleteCategory,
};
