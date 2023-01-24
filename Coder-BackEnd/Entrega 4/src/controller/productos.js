const { v4: uuidv4 } = require('uuid');
const createError=require("http-errors")




class ProductosApi {

constructor () {
        this.productos=[
        {
            id:"7b23a407-f763-42ea-9840-22269c156c7b",
            title:"buzo",
            price:"200",
            thumbnail:"wdwd"
        }
        ];
}

exists(id) {
const indice=this.productos.findIndex(aProduct => aProduct.id== id)
return indice >= 0;
}

// 1 get
getAll() {
    return this.productos;
}
// 2 get
getById(id) {
    const exist=this.exists(id);

    if(!exist) return createError(404,"El producto no existe");

    const indice= this.productos.findIndex(aProduct => aProduct.id== id);

    return this.productos[indice];
}
// 3 post
save(data) {
    const nuevoProducto= {
        id:uuidv4(),
        title:data.title,
        price:data.price,
        thumbnail:"https://library.sportingnews.com/styles/crop_style_16_9_mobile_2x/s3/2022-03/newell%27s%20%281%29.jpg?itok=6F-p7KZm"
    }
    
    this.productos.push(nuevoProducto);
    return nuevoProducto;
}
// 4 put 
actualizarPorId(id,nuevaData) {
    const exist=this.exists(id);

    if(!exist) return createError(404,"El producto no existe");

    const indice= this.productos.findIndex(aProduct => aProduct.id== id);

    const productoViejo= this.productos[indice]

    const nuevoProducto= {
        id:productoViejo.id,
        title:nuevaData.title,
        price:nuevaData.price,
        thumbnail:"rrrrr"
    }

    this.productos.splice(indice,1,nuevoProducto);

    return nuevoProducto;
}
// 5 delete
deleteById(id) {
    const exist=this.exists(id);
    if(!exist) return;

    const indice= this.productos.findIndex(aProduct => aProduct.id== id);

    this.productos.splice(indice,1);

}

}




//Creamos una instancia del constructor de productos
instanciaProductos= new ProductosApi();

//Exportamos la instancia
 module.exports = {
    ProductosController:instanciaProductos
 }