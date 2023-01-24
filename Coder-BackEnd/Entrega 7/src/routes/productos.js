// const {Router} = require("express");
import {Router} from "express";
const router = Router();

//Importacion de archivos
// const {instanciaDeProductos}=require("../controller/logicaProducts");
// const { mySql } = require("../controller/mySql");
import {mySql} from "../controller/mySql.js";


// router.get("/",async (req,res)=>{

//     productos=await mySql.getAll(); //getAll()

//     res.render("productos",{productos});
//     // console.log(productos)
// })

router.post("/",async (req,res)=>{
    data=(req.body);
    console.log("esta es la data:",data)

    const nuevoProducto={
        title:data.title,
        price:data.price
    }
    console.log("esta es el nuevoProcuto:",nuevoProducto)

    const result =await mySql.insertData(nuevoProducto); //save(nuevoProduco)
    res.json(result)
})



// module.exports=router;
export default router;