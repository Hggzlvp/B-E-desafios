const fs=require("fs");

class ApiProductos {

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
    



    //Aca empieza el manejo de PRODUCTOS---------------------------------------------------------------------

    
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

        return nuevoProducto;
    
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

const instanciaDeProductos = new ApiProductos("productos.json")


module.exports = {
    instanciaDeProductos : instanciaDeProductos
}