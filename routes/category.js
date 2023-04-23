//category api model

const router = require("express").Router();
const categoryController = require("../controllers/categoryController");

router.post("/", categoryController.addCategory);
router.get("/", categoryController.allCategory);
router.get("/:categoryId", categoryController.singleCategory);
router.put("/:categoryId", categoryController.updateCategory);
router.delete("/:categoryId", categoryController.deleteCategory);

module.exports = router;
