const express = require("express")
const fs = require("fs")
const path = require("path")
const app= express();
const PORT = 8080;



// DEFINICION DE RUTAS 

app.get("/",(req,res) =>{
    res.json("Para ver todos nuestros productos= /productos O para ver un producto al azar /productoAlAzar")
})

app.get("/productos",(req,res) =>{
    const todosLosProductos= productos.getAll().then((producto) =>{
        res.json(producto)
    })
    
})

app.get("/productoAlAzar",(req,res) =>{
    const alAzar=(min,max) =>{
        return Math.floor((Math.random()* (max - min + 1)) + min);
    }

    const productoAlAzar= productos.getAll().then((producto) => {
        res.json(producto[alAzar(0,producto.length-1)]);
    })
})

const server =app.listen(PORT, ()=>{
    console.log(`Servidor escuchando en el puerto ${server.address().port}`);
})

server.on("error",error=> console.log(`Error en servidor ${error}`));

//CLASE CONTENEDORA DESAFIO 2
class Contenedor {

    constructor(archivo) {
            this.archivo = archivo;
    }
    
    
    // read = Lee el producto
    async read() {
        try {
            const data = await fs.promises.readFile(this.archivo , "utf-8");
            const datos=JSON.parse(data);
            return datos;
    
        } catch (error) {
            console.log(error)
        }
       
    }
    
    // escribe el producto con las tabulaciones
    async guardarProductos(productos){
        try {
            const data= JSON.stringify(productos,null,"\t")
            fs.promises.writeFile(this.archivo,data)
        } catch (error) {
            console.log(error)
        }
        
    
    }
    
    // Save(objet): Number - Recibe un objeto, lo guarda en el archivo y devuelve el id asignado;
    async save(data) {
    try {
        const productos =await this.read()
    
        const nuevoProducto= {
           title:data.title,
           price:data.price,
           id: productos[productos.length - 1].id + 1
        }
        productos.push(nuevoProducto)
       
        this.guardarProductos(productos)
    
    } catch (error) {
        console.log(error)
    }
    
    }
    
    // getById(Number): Object - Recibe un id y devuelve el objeto con ese id, o null si no esta;
    async getById(id) {
        try {
            const productos= await this.read()
    
            const indice= productos.findIndex((product) => product.id === id)
    
            if(indice < 0) {
                throw new Error("Error ,este producto no existe");
            }
      
            return productos[indice];
    
        } catch (error) {
            console.log(error)
        }
        
    }
    
    // getAll():Object [] - Devuelve un array con los objetos presentes en el archivo;
    async getAll() {
    
        try {
            const productos= this.read();
            return productos;
    
        } catch (error) {
            console.log(error)
        }
        
    }
    
    // deleteById(Number):void -Elimina del archivo el objeto con el id buscado;
    async deleteById(id){
        try {
            const productos= await this.read()
    
        const indice= productos.findIndex((product) => product.id === id)
    
        if(indice < 0) {
            console.log("No se encontro el archivo para borrarlo")
        } else {
            productos.splice(indice,1)
    
            this.guardarProductos(productos);
        }
    
        
    
        } catch (error) {
            console.log(error)
        }
        
    }
    
    // deleteAll():void - Elimina todos los objetos presentes en el archivo;
    async deleteAll() {
        this.guardarProductos([])
    }
    
    }
 
    
    const productos = new Contenedor("productos.json")