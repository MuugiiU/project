import { Router } from "express"
import { getSuppliers, getSupplier,createSupplier,updtadeSupplier,SupplierRegister,SupplierLogin } from "../controllers/supplierControllers";

const router = Router();

router.route("/register").post(SupplierRegister);
router.route("/login").post(SupplierLogin);

router.route("/").get(getSuppliers).post(createSupplier);
router.route("/:id").get(getSupplier).put(updtadeSupplier);


export default router;