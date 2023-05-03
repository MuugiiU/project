import express from "express";
import { getAllProducts, getProduct, createProduct, deleteProduct, updateProduct } from "../controllers/productController";

const router = express.Router();

router.get("/", getAllProducts);
// router.get("/categories/:id", getAllProductByCategory);
router.post("/", createProduct);
router.get("/:id", getProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;
