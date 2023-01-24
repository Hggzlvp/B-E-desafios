import * as productService from "../servicies/product.service.js";

  export const createProduct = async(req, res) => {
    const { cant } = req.query;
    try {
      const response = await productService.createProductMock(cant);
      res.status(200).json({ productos: response });
    } catch (error) {
      console.log(error);
    }
  }