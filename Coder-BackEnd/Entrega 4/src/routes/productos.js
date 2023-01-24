// importar Router de express
const { Router } = require("express");
const router=Router();
//Importar el archivo desde productos.controller
const {ProductosController} = require("../controller/productos")


//EndPoints para manejar los Productos
//Cuando la funcion esasincronica va a fallar,hay que pasar el error con un tryCatch + next() para que lo ataje el middleware de src.services.server O utilizar AsyncHandler(libreria)

// 1
router.get("/",(req,res)=>{
    res.json({
        msg:ProductosController.getAll()
    })
})
// 2
router.get("/:id",(req,res)=>{
    const id=req.params.id;
    const product=ProductosController.getById(id)

    res.json({
        msg:product
    })
})
//3
router.post("/",(req,res)=>{
    const body= req.body
    const data =ProductosController.save(body)

    res.json({
        msg:data
    })
})
//4
router.put("/:id",(req,res)=>{
    const id=req.params.id;
    const {body}= req
    const data=ProductosController.actualizarPorId(id,body)

    res.json({
        msg:data
    })
})
//5
router.delete("/:id",(req,res)=>{
    const id=req.params.id;
    res.json({
        msg:ProductosController.deleteById(id)
    })
})

module.exports=router;