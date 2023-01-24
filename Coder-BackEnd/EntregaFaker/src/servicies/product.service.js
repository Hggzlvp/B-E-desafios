import createProduct from "../utils/products.utils.js";


const products = [];
// let lastId = 0;

  export const createProductMock = async(cant = 5) => {
    for (let i = 0; i < cant; i++) {
      const product = createProduct();
      // product.id = i + 1;
      products.push(product);
    }
    // lastId = cant;
    return products;
  }
