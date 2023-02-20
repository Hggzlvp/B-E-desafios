import * as MongoDB from "./mongo/mongo.js";
import { initDaoMongo } from "./mongo/mongo.js";

const selectedDAO = process.argv[2];
let DAO = null;

switch(selectedDAO) {
    case 'mongo':
        initDaoMongo();
        DAO = MongoDB;
        break;
    case "PosibleCambioDeDataBase":
        console.log("Todavia no hay otra base de datos disponible")
}  


// CART
export const getAllCart = async()=> {
    return await DAO.getAllCart()
}
export const getCartById = async(id)=> {
    return await DAO.getCartById(id)
}
export const createCart = async(newCart)=> {
    return await DAO.createCart(newCart)
}
export const deleteCart = async(id)=> {
    return await DAO.deleteCart(id)
}
export const deleteCartbuy = async(id)=> {
    return await DAO.deleteCartbuy(id)
}
export const deleteProductByCart = async(idCart)=> {
    return await DAO.deleteProductByCart(idCart)
}
export const productsByCartId = async(idCart,idProduct)=> {
    return await DAO.productsByCartId(idCart,idProduct)
}
export const buyCart = async(idCart)=> {
    return await DAO.buyCart(idCart)
}


// CATEGORYS
export const getAllCategories = async () => {
    return await DAO.getAllCategories()
  };
  
  export const getCategoryById = async (id) => {
    return await DAO.getCategoryById(id)
  };
  
  export const createCategory = async (name,description) => {
    return await DAO.createCategory(name,description)
  };
  
  export const updateCategory = async (id,name,description) => {
    return await DAO.updateCategory(id,name,description)
  };
  
  export const deleteCategory = async (id) => {
    return await DAO.deleteCategory(id)
  };


// PRODUCTS
export const checkBodyProduct = async (categoryId) => {
    return await DAO.checkBodyProduct(categoryId)
};

export const getAllProducts= async (query) => {
    return await DAO.getAllProducts(query)
}

export const getProductById= async (id) => {
    return await DAO.getProductById(id)  
}

export const createProduct= async (name,description,stock,price,categoryId) => {
    return await DAO.createProduct(name,description,stock,price,categoryId)
}

export const updateProduct= async (id) => {
    return await DAO.updateProduct(id)  
}

export const deleteProduct = async (id) => {
    return await DAO.deleteProduct(id)
}


// USERS
 export const signup = async (username, password,email,number) => {
    return await DAO.signup(username, password,email,number)
  };
  
  export const login = async (username) => {
    return await DAO.login(username)
  };

  export const deserializeUser = async(userId)=>{
    return await DAO.deserializeUser(userId)
  };



// DAO
export const getDao= () => {
    return DAO
}
