import { Router } from "express"
import { getSuppliers, getSupplier,createSupplier } from "../controllers/supplierControllers";

const router = Router();

router.route("/").get(getSuppliers).post(createSupplier);
router.route("/:id").get(getSupplier);

export default router;