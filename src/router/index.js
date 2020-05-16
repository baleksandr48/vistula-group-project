const express = require("express");

const {
  getAllCategories,
  getCategoryById,
  createCategory,
  deleteCategory,
  updateCategory,
} = require("../controllers/category-controller");
const {
  deleteBook,
  createBook,
  getBookById,
  getAllBooks,
  updateBook,
  uploadImage,
} = require("../controllers/book-controller");
const {
  getOpinionById,
  createOpinion,
  deleteOpinion,
  getAllOpinions,
  updateOpinion,
} = require("../controllers/opinion-controller");

const router = express.Router();

router.get("/books/", getAllBooks);
router.get("/book/:id", getBookById);
router.post("/book", createBook);
router.delete("/book/:id", deleteBook);
router.put("/book/:id", updateBook);

router.post("/image", uploadImage);

router.get("/categories/", getAllCategories);
router.get("/category/:id", getCategoryById);
router.post("/category", createCategory);
router.delete("/category/:id", deleteCategory);
router.put("/category/:id", updateCategory);

router.get("/opinions/", getAllOpinions);
router.get("/opinion/:id", getOpinionById);
router.post("/opinion", createOpinion);
router.delete("/opinion/:id", deleteOpinion);
router.put("/opinion/:id", updateOpinion);

module.exports = router;
