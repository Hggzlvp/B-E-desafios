import { 
    getAllProducts,
    getProductById,
    createProduct,
    deleteProduct,
    updateProduct,
 } from "../controller/logicaProducts.js";



    export const getAllProductsGrap= async () => {
        
        const products = await getAllProducts()
        return products

    }

    export const getProductByIdGrap= async (args) => {
        
            const {id} =args.params;
            // const product= await ProductsModel.findById(id);
            const product = await getProductById(id)
            return product
    }
    
    export const createProductGrap= async (data) => {
        
            const {name,description,stock,price,categoryId}=data.body;

            const newProduct= await createProduct({
                name,
                description,
                stock,
                price,
                categoryId,
            })


            return newProduct
    }

    export const updateProductGrap= async (args) => {
        
            const {id} = args.params;
            const {name,description,stock,price}=args.body;

            const product=await updateProduct(id)
 
            const productUpdated = await updateProduct({
                id,
                name,
                description,
                stock,
                price,
                new:true
            });

            return productUpdated

    }
    
    export const deleteProductGrap = async (args) => {

        const { id } = args.params;

        await deleteProduct(id)

        return 'product deleted!'
        
    }

