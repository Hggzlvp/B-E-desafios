const {Router} = require("express");
const router = Router();

//imports
const ProductosRoutes=require("./productos")
const CartRoutes=require("./cart")

router.use("/productos",ProductosRoutes)
router.use("/carrito",CartRoutes)


module.exports=router;