import {Router} from "express"
const router = Router();

//imports
import ProductosRoutes from "./productos.js"
import CartRoutes from "./cart.js"
import CategoryRoutes from "./category.js"

router.use("/productos",ProductosRoutes)
router.use("/carrito",CartRoutes)
router.use("/categorias",CategoryRoutes)

export default router;