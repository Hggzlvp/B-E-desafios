import { buildSchema } from "graphql";
import { 
    getAllProductsGrap,
    getProductByIdGrap,
    createProductGrap,
    deleteProductGrap,
    updateProductGrap,
 } from "../controller/graphqlProducts.js"


 export const graphqlSchema = buildSchema (`

    type Product {
        id: String!
        name: String!
        description: String!
        price: Int!
        stock: Int!
        categoryId: String!
    }

    input NewProduct {
        name: String!
        description: String!
        price: Int!
        stock: Int!
        categoryId: String!
    }

    type Query{
        getAllProductsGrap:[Product]
        getProductByIdGrap(id:String!):Product
    }

    type Mutation {
        createProductGrap(data:NewProduct):Product
        updateProductGrap(data:NewProduct):Product
        deleteProductGrap(id:String!):Boolean
    }

 `)

 export const graphqlRoot = {

    getAllProductsGrap,
    getProductByIdGrap,
    createProductGrap,
    deleteProductGrap,
    updateProductGrap,

 }