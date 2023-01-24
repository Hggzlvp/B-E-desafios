// const {Router} = require("express");
import {Router} from "express";
export const router = Router();

//imports
import ProductosRoutes from "./productos.js"
// const ProductosRoutes=require("./productos")

router.use("/productos",ProductosRoutes)

