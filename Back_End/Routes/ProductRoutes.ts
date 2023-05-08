import express from "express";
import {
  getAllProducts,
  // getProduct,
  createProduct,
  deleteProduct,
  updateProduct,
  getBaraa
} from "../controllers/productController";

const router = express.Router();

router.get("/", getAllProducts);
router.post("/", createProduct);
// router.get("/:id", getProduct);
router.get("/:id", getBaraa);
router.put("/:id", updateProduct);
router.delete(":id", deleteProduct);

export default router;
