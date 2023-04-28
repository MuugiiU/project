import express from "express";
import {
  createCartList,
  deleteCartItem,
  getAllCartList,
  updateCartList,
} from "../controllers/cartItemController";

const router = express.Router();

router.post("/", createCartList);
router.get("/", getAllCartList);
router.put("/:id", updateCartList);
router.delete("/:id", deleteCartItem);

export default router;
