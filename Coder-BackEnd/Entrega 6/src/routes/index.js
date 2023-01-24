const {Router} = require("express");
const router = Router();

//imports
const ProductosRoutes=require("./productos")

router.use("/productos",ProductosRoutes)


module.exports=router;