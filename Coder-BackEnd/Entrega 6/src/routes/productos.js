const {Router} = require("express");
const router = Router();

//Importacion de archivos
const {instanciaDeProductos}=require("../controller/logicaProducts")


router.get("/",async (req,res)=>{
    productos=await instanciaDeProductos.getAll();

    res.render("productos",{productos});
    // console.log(productos)
})

router.post("/",async (req,res)=>{
    data=(req.body);
    console.log("esta es la data:",data)

    const nuevoProducto={
        title:data.title,
        price:data.price,
        url:data.url
    }
    console.log("esta es el nuevoProducto:",nuevoProducto)

    const result =await instanciaDeProductos.save(nuevoProducto);
    res.json(result)
})



module.exports=router;