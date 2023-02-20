import { getDao } from "../Daos/Factory.js";

import { cartsDto } from "../Dto/dtoCart.js";
import { categorysDto } from "../Dto/dtoCategorys.js";
import { productsDto } from "../Dto/dtoProducts.js";
import { usersDto } from "../Dto/dtoUser.js";




// export default class NewsRepository {
//     constructor() {
//         this.dao = getDao();
//     }

//     async getAllNews() {
//         const listNews = await this.dao.getAllNews();
//         const listNewsDTO = newsDTO(listNews);
//         return listNewsDTO;
//     }
// }

const dao=getDao()


// CART
export const getAllCartf = async()=> {
    const listNews = await dao.getAllCart();
    const listNewsDTO = cartsDto(listNews);
    return listNewsDTO
}
export const getCartByIdf = async(id)=> {
    const listNews = await dao.getCartById(id);
    const listNewsDTO = cartsDto(listNews);
    return listNewsDTO
}
export const createCartf = async(newCart)=> {
    const listNews = await dao.createCart(newCart);
    const listNewsDTO = cartsDto(listNews);
    return listNewsDTO
}
export const deleteCartf = async(id)=> {
    const listNews = await dao.deleteCart(id);
    const listNewsDTO = cartsDto(listNews);
    return listNewsDTO
}
export const deleteCartbuyf = async(id)=> {
    const listNews = await dao.deleteCartbuy(id);
    const listNewsDTO = cartsDto(listNews);
    return listNewsDTO
}
export const deleteProductByCartf = async(idCart)=> {
    const listNews = await dao.deleteProductByCart(idCart);
    const listNewsDTO = cartsDto(listNews);
    return listNewsDTO
}
// DUDA SOBRE DOS CONSULTAS A DB
export const productsByCartIdf = async(idCart,idProduct)=> {
    const listNews = await dao.productsByCartId(idCart,idProduct);
    const listNewsDTO = cartsDto(listNews);
    return listNewsDTO
}
export const buyCartf = async(idCart)=> {
    const listNews = await dao.buyCart(idCart);
    const listNewsDTO = cartsDto(listNews);
    return listNewsDTO
}


// CATEGORYS
export const getAllCategories = async () => {
    const listNews = await dao.getAllCategories();
    const listNewsDTO = categorysDto(listNews);
    return listNewsDTO
  };
  
  export const getCategoryById = async (id) => {
    const listNews = await dao.getCategoryById(id);
    const listNewsDTO = categorysDto(listNews);
    return listNewsDTO
  };
  
  export const createCategory = async (name,description) => {
    const listNews = await dao.createCategory(name,description);
    const listNewsDTO = categorysDto(listNews);
    return listNewsDTO
  };
  
  export const updateCategory = async (id,name,description) => {
    const listNews = await dao.updateCategory(id,name,description);
    const listNewsDTO = categorysDto(listNews);
    return listNewsDTO
  };
  
  export const deleteCategory = async (id) => {
    const listNews = await dao.deleteCategory(id);
    const listNewsDTO = categorysDto(listNews);
    return listNewsDTO
  };


// PRODUCTS
export const checkBodyProduct = async (categoryId) => {
    const listNews = await dao.checkBodyProduct(categoryId);
    const listNewsDTO = productsDto(listNews);
    return listNewsDTO
};

export const getAllProducts= async (query) => {
    const listNews = await dao.getAllProducts(query);
    const listNewsDTO = productsDto(listNews);
    return listNewsDTO
}

export const getProductById= async (id) => {
    const listNews = await dao.getProductById(id);
    const listNewsDTO = productsDto(listNews);
    return listNewsDTO 
}

export const createProduct= async (name,description,stock,price,categoryId) => {
    const listNews = await dao.createProduct(name,description,stock,price,categoryId);
    const listNewsDTO = productsDto(listNews);
    return listNewsDTO
}

export const updateProduct= async (id) => {
    const listNews = await dao.updateProduct(id);
    const listNewsDTO = productsDto(listNews);
    return listNewsDTO 
}

export const deleteProduct = async (id) => {
    const listNews = await dao.deleteProduct(id);
    const listNewsDTO = productsDto(listNews);
    return listNewsDTO
}


// USERS
 export const signupf = async (username, password,email,number) => {
    const listNews = await dao.signup(username, password,email,number);
    const listNewsDTO = usersDto(listNews);
    return listNewsDTO
  };
  
  export const loginf = async (username) => {
    const listNews = await dao.login(username);
    const listNewsDTO = usersDto(listNews);
    return listNewsDTO
  };

  export const deserializeUserf = async(userId)=>{
    const listNews = await dao.deserializeUser(userId);
    const listNewsDTO = usersDto(listNews);
    return listNewsDTO
  };