//Array de objetos con los productos
let productos= [
    {
        id:1,
        name:"Netbook",
        price:500
    }
]

//Routes  ` `
app.get("/productos",(req,res)=>{
    res.json(productos)
})

app.get("/productos/:id",(req,res)=>{
    const productoPorId=productos.find( p=>{return p.id==req.params.id} )
    if(!productoPorId) return res.status(404).json({
        message:"El producto no existe"
    })
    res.json(productoPorId)
})

app.post("/productos",(req,res)=>{
    const nuevoProducto={...req.body,id:productos.length + 1}
    productos.push(nuevoProducto)
    res.send(nuevoProducto)
})

app.put("/productos/:id",(req,res)=>{
    const nuevaData=req.body;
    const productoPorId=productos.find((p)=>p.id===parseInt(req.params.id) )

    if(!productoPorId) return res.status(404).json({
        message:"El producto no existe"
    })

    // ? Significa (SI ES TRUE) | : significa (caso contrario a true)
    productos=productos.map(p=> p.id === parseInt(req.params.id) ? {...p,...nuevaData} : p)


    res.send(`Producto actualizado exitosamente`)
})

app.delete("/productos/:id",(req,res)=>{
    const productoPorId=productos.find((p)=>p.id===parseInt(req.params.id) )

    if(!productoPorId) return res.status(404).json({
        message:"El producto no existe"
    })

    nuevosProductos=productos.filter( p=>p.id !== parseInt(req.params.id))

    res.send("producto eliminado exitosamente")
})





app.use("/",(req,res)=>{
    res.status(404).send("No se encontro la pagina buscada")
})
