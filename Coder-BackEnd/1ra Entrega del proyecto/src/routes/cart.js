const {Router} = require("express");
const router = Router();
const config =require("../config/index")

//Importacion de archivos
const {instanciaDeCart}=require("../controller/logicaCarts")


router.get("/:id/productos",async (req, res) => {
        
        const id = req.params.id;
        const data = await instanciaDeCart.productsByCartId(id);

        res.json({
            data,
        });
        
    }
);

router.post("/",async (req, res) => {
        
        const idCart = await instanciaDeCart.createCart();

        res.json({
         msg: `El ID del carrito creado es: ${idCart}`,
        });   
    }
);

router.post("/:id/productos",async (req, res) => {
    
        const idCart = req.params.id;
        const idProduct = req.body.id;

        await instanciaDeCart.addProductToCart(idCart, idProduct);
        
        res.json({
            msg: `El producto con id:${idProduct} se ha agregado correctamente al cart con id: ${idCart}`,
        });
    }
);

router.delete("/:id",async (req, res) => {
            
        const id = req.params.id;
    
        await instanciaDeCart.deleteCart(id);
    
        res.json({
            msg: `El elemento con Id: ${id} se a eliminado correctamente`,
        });
    
    }
);

router.delete("/:id/productos/:id_prod", async (req, res) => {
        
        const idCart = req.params.id;
        const idProduct = req.params.id_prod;
            
        await instanciaDeCart.deleteProductToCart(idCart, idProduct);
            
        res.json({
            msg: `El producto con id: ${idProduct}, fue eliminado del carrito: ${idCart}`,
        });
    }
);
  


module.exports=router;