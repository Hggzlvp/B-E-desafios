const {Router} = require("express");
const router = Router();
const config =require("../config/index")
const { v4: uuidv4 } = require('uuid');

//Importacion de archivos
const {instanciaDeProductos}=require("../controller/logicaProducts")

const administrador=(req,res,next) => {
    if(config) {
        return res.status(401).send({
            msg:"No sos administrador"
        })
    }
    next();
}



//DISPONIBLE PARA USUARIOS

router.get("/",async (req,res)=>{
    productos=await instanciaDeProductos.getAll();
    res.json({productos})
    // res.render("productos",{productos});
})

router.get("/:id",async (req,res)=> {

    const id= req.params.id
    const productos=await instanciaDeProductos.getById(id);

    res.json({
        productos
    })
  
})

// DISPONIBLES PARA ADMINS

router.post("/",administrador,async (req,res)=>{
    data=(req.body);
    console.log("esta es la data:",data)

    const nuevoProducto={
        id:uuidv4(),
        timestamp: new Date().toLocaleString(),
        title: data.title,
        description:data.description,
        cod: data.cod,
        img: data.img,
        price: data.price,
        stock: data.stock
    }
    console.log("esta es el nuevoProcuto:",nuevoProducto)

    const result =await instanciaDeProductos.save(nuevoProducto);
    res.json(result)
})

router.put("/:id",administrador,async (req,res)=>{
    
        const id= req.params.id
        const body = req.body
        
        if (instanciaDeProductos.validationBody(body)) {
            res.status(401).json({
                msg: 'Datos invalidos'
            })
        } else {

            await instanciaDeProductos.upgradeProduct(id, body)

            res.json({
                msg: ` El producto con id ${id} se modificó correctamente`
            })
        }
    
})

router.delete("/:id",administrador,async (req,res)=>{

    const id = req.params.id

    await instanciaDeProductos.deleteById(id)

    res.json({
        msg: `El producto con id: ${id} Se eliminó correctamente `
    })
    
})


module.exports=router;