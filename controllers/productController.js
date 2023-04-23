const Product = require("../model/Product");

//Get All Products
const allProduct = async (req, res) => {
  const { limit, page } = req.query;
  try {
    const totalProducts = await Product.find({
      categoryId: req.params.categoryId,
    });
    const products = await Product.find({
      categoryId: req.params.categoryId,
    })
      .skip(+limit * (+page - 1))
      .limit(+limit);
    res.json({
      products,
      meta: {
        totalItemCount: totalProducts?.length,
        currentPage: page,
        limit: limit,
      },
    });
  } catch (error) {
    res.json({ message: error });
  }
};

//Single Product
const singleProduct = async (req, res) => {
  try {
    const product = await Product.findOne({ productId: req.params.productId });
    res.json(product);
  } catch (error) {
    res.json({ message: error });
  }
};

//Add new Product
const addProduct = async (req, res) => {
  const product = new Product({
    productName: req.body.productName,
    description: req.body.description,
    categoryId: req.body.categoryId,
    productId: req.body.productId,
  });
  try {
    const savedProduct = await product.save();
    res.send(savedProduct);
  } catch (error) {
    res.status(400).send(error);
  }
};

//Update Product
const updateProduct = async (req, res) => {
  try {
    const product = {
      productName: req.body.productName,
      description: req.body.description,
      categoryId: req.body.categoryId,
      productId: req.body.productId,
    };
    const updatedProduct = await Product.findOneAndUpdate(
      {
        productId: req.params.productId,
      },
      product
    );
    res.json(updatedProduct);
  } catch (error) {
    res.json({ message: error });
  }
};

//Delete Product
const deleteProduct = async (req, res) => {
  try {
    const removeProduct = await Product.findOneAndDelete({
      productId: req.params.productId,
    });
    res.json(removeProduct);
  } catch (error) {
    res.json({ message: error });
  }
};

module.exports = {
  allProduct,
  addProduct,
  singleProduct,
  updateProduct,
  deleteProduct,
};
