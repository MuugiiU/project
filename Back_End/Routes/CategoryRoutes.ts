import express from "express";
import { getAllCategories, getCategory, createCategory, createSubCategory, updateSubCategory, updateCategory, deleteCategory, deleteSubCategory } from "../controllers/categoryController";

const router = express.Router();

router.post("/:categoryId/sub", createSubCategory);
router.put("/:categoryId/sub/:subCategoryId", updateSubCategory);
router.delete("/:categoryId/sub/:subCategoryId", deleteSubCategory);

router.get("/", getAllCategories);
router.post("/", createCategory);
router.get("/category/:id", getCategory);
router.put("/category/:id", updateCategory);
router.delete("/category/:id", deleteCategory);

export default router;
