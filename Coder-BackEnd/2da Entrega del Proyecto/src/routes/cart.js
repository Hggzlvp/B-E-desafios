import {Router} from "express"
import {
 getAllCart,
 getCartById,
 createCart,
 deleteProductByCart,
 deleteCart,
 productsByCartId
} from '../controller/logicaCarts.js';
const router = Router();




router.get("/",getAllCart);

router.get("/:id",getCartById);

router.post("/",createCart);

router.post("/:id",productsByCartId)

router.delete("/:id",deleteCart);

router.delete("/:id/productos",deleteProductByCart);
  
export default router;