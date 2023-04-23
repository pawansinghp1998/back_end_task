//product api route
const router = require("express").Router();
const productController = require("../controllers/productController");

router.post("/", productController.addProduct);
router.get("/category/:categoryId", productController.allProduct);
router.get("/:productId", productController.singleProduct);
router.put("/:productId", productController.updateProduct);
router.delete("/:productId", productController.deleteProduct);

module.exports = router;
