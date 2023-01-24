import * as productController from "../controller/productsController.js";
import { Router } from 'express';
const router = Router();

router.post("/popular", productController.createProduct);

export default router;