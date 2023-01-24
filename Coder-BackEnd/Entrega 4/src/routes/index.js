// importar Router de express
const { Router } = require("express");
const router=Router();

// Importacion de productos.routes a routes.principal para que se pueda utilizar en server.js(app pricipal)
const ProductosRouter=require("./productos");


router.get("/",(req,res)=>{
    res.json({
        msg:"ok router"
    })
})

//Todo lo que empieze con /productos lo va a manejar la constante "ProductosRouter" que es la importacion de productos.routes a routes.principal
router.use("/productos",ProductosRouter);

module.exports=router;