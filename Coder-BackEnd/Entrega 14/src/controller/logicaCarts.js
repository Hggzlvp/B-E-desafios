import { CartModel } from '../models/cart.js';
import {sendMailEthereal} from "../services/email.services.js"
import { sendSMS,sendWSP } from '../services/twilio.services.js';
import { buyCartf, createCartf, deleteCartbuyf, deleteCartf, deleteProductByCartf, getAllCartf, getCartByIdf, productsByCartIdf } from '../persistencia/Repository/repostory.js';


export const getAllCart = async (req, res) => {
  try {
    // const cart = await CartModel.find();
    const cart = await getAllCartf()
    res.json({
      data: cart
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
      stack: err.stack,
    });
  }
};

export const getCartById = async (req, res) => {
  try {
    const { id } = req.params;
    // const cart = await CartModel.findById(id)
    const cart= await getCartByIdf(id)
    if(!cart)
     return res.status(404).json({
      msg: 'Carrito no encontrado!'
     });
     res.json({
      data: cart
     })
  } catch (err) {
    res.status(500).json({
      error: err.message
    });
  }
};

export const createCart = async (req, res) => {
  try {
    const newCart = {
        timestap:new Date().toLocaleString(),
        productos:[],
    };
    // const cart = await CartModel.create(newCart)
    const cart=await createCartf(newCart)
    // return cart?._id.toString()

    res.json({
      cart
    })
    
  } catch (err) {
    res.status(500).json({
      error: err.message
    });
  }
};

export const deleteCart = async (req, res) => {
  try {
    const {id} = req.params;
    // await CartModel.findByIdAndDelete(id);
    await deleteCartf(id)
    res.json({
      msg: 'carrito eliminado correctamente'
    })
  } catch (err) {
    res.status(500).json({
      error: err.message
    });
  }
};

export const deleteCartbuy = async (req, res) => {
  try {
    const {id} = req.params;
    // await CartModel.findByIdAndDelete(id);
    await deleteCartbuyf(id)
    res.json({
      msg: 'carrito eliminado correctamente'
    })
  } catch (err) {
    res.status(500).json({
      error: err.message
    });
  }
};

export const deleteProductByCart = async (req, res) => {
      try {
        const idCart=req.params.id;
        const {id}=req.body;
        const idProduct=id;

        // const dataCart = await CartModel.findById(idCart);
        const dataCart = await deleteProductByCartf(idCart);

        const indexProducto = dataCart.productos.findIndex((itemId) => itemId.id == idProduct)

        if (indexProducto < 0) {
          throw "El producto no existe";
        }

        dataCart.productos.splice(indexProducto,1)
        
        await CartModel.create(dataCart)

        res.json({
           msg: `el producto con ${idProduct} fue eliminado del carrito ${idCart}`
        })
      } catch (err) {
        res.status(500).json({
          error: err.message
        });
      }
};

// DUDA EN ESTE DAO SOBRE LA DOBLE CONSULTA A LA DB (CONSULTAR CON TUTOR O PROFESOR)
export const productsByCartId= async (req,res) => {
  try {
    
    const idCart=req.params.id;
    const {id}=req.body;
    const idProduct=id;

    // const dataCart = await CartModel.findById(idCart)
    // const dataProduct= await ProductsModel.findById(idProduct)
    dataCart = await productsByCartIdf(idCart);
    dataProduct = await productsByCartIdf(idProduct)

    dataCart.productos.push(dataProduct)

    await CartModel.create(dataCart)

    res.json({
      msg: `el producto con ${idProduct} fue agregado al carrito ${idCart}`
    })

  } catch (err) {
    res.status(500).json({
      error: err.message
    });
  } 
}

export const buyCart= async (req,res) => {
  try {
    
  const idCart=req.params.id;
  // const dataCart = await CartModel.findById(idCart)
  const dataCart = await buyCartf(idCart);
  const nombresProductos= dataCart.productos.map(x => x.name)
    
  await sendMailEthereal("Compra de pepito",nombresProductos.toLocaleString())
  // await CartModel.findByIdAndDelete(idCart);
  
  await sendSMS(`su lista de productos es:${nombresProductos}`)
  await sendWSP(`su lista de productos es:${nombresProductos}`)
 
  res.json({
    msg: `Ha finalizado su compra`
  })

  } catch (err) {
    console.log(err)
    res.status(500).json({
      error: err.message
    });
  } 
}