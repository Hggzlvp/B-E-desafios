const fs=require("fs");
const { v4: uuidv4 } = require('uuid');
const {instanciaDeProductos}=require("../controller/logicaProducts")

class ApiCart {

    constructor(archivo) {
            this.archivo = archivo;
    }

    //Funciones----------------------------------------------------------------------------------------------

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
    // Validacion de datos
    validationBody(body){
        if(
            !body.title ||
            !body.cod   || body.cod   !== 'number' ||
            !body.price || body.price !== 'number' ||
            !body.stock || body.stock !== 'number'

        ){
            return false
        }else{
            return true
        }
    }


    //Aca empieza el manejo de Cart ---------------------------------------------------------------------

    async createCart() {
        try {
        const dataJSON= await this.read();
        console.log(dataJSON)

        const newCart = 
        {
            id: uuidv4(),
            timestap: new Date().toLocaleString(),
            productos: []
        };
        // console.log(newCart)
        dataJSON.push(newCart);

        this.guardarProductos(dataJSON);

        return newCart.id;
        } catch (error) {
        console.log(error);
        }
    }

    async deleteCart(id) {
        try {
        const data= await this.read();
        const index = data.findIndex((itemId) => itemId.id === id);

        if (index < 0) {
            throw "El producto no existe";
        }
        data.splice(index, 1);

        await this.guardarProductos(data);
        } catch (error) {
        console.log(error);
        }
    }

    async productsByCartId(id) {
        try{
        const data = await this.read();
        const index = data.findIndex((itemId) => itemId.id === id);
        if (index < 0) {
            throw "El producto no existe";
        }

        return data[index].productos;

        }catch(error){
        console.log(error)
        }
    }

    async addProductToCart(idCart, idProduct) {
        try{
            const dataCart = await this.read("cart");
            console.log(dataCart) //Ambos console.log() me tiran la misma data
            const dataProducto = await instanciaDeProductos.read("productos")
            console.log(dataProducto)
            
            const indexCart = dataCart.findIndex((itemId) => itemId.id === idCart);
            const indexProducto = dataProducto.findIndex((itemId) => itemId.id === idProduct)

            if (indexCart < 0) {
            throw "El carrito no existe";
            }
            if (indexProducto < 0) {
            throw "El producto no existe";
            }
            
            dataCart[indexCart].productos.push(dataProducto[indexProducto])
        
            await this.guardarProductos(dataCart,'cart') 

        }catch(error){
            console.log(error);
            
        }

    }

    async deleteProductToCart(idCart, idProduct){
        try{
        const dataCart = await this.read("cart");
        const indexCart = dataCart.findIndex((itemId) => itemId.id === idCart);

            if (indexCart < 0) {
                throw "El carrito no existe";
            }

            const indexProducto = dataCart[indexCart].productos.findIndex((itemId) => itemId.id === idProduct)

            if (indexProducto < 0) {
            throw "El producto no existe";
            }

            dataCart[indexCart].productos.splice(indexProducto,1)
            await this.guardarProductos(dataCart,'cart')

        }catch(error){
            console.log(error)
        }

    }

}

const instanciaDeCart = new ApiCart("cart.json")


module.exports = {
    instanciaDeCart : instanciaDeCart
}