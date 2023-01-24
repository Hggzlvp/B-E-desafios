import express from "express"
// ---------------
import http from "http"
const app=express();
const server=http.Server(app)
import { initWsServer } from "./socket.js";
import {mySql} from "../controller/mySql.js";
// ---------------
import path from "path"
import {Server} from "socket.io"

//Importando mainRouter desde routes/index.js
import {router as mainRouter} from "../routes/index.js";
import { fileURLToPath } from "url";

//settings
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'));
//setting de EJS
const __filename=fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.set("views",path.resolve(__dirname,"../../views"))

app.set("view engine","ejs")


app.get("/",async (req,res)=>{

    const productos=await mySql.getAll();
    // await mySql.createTables(); //DESCOMENTAR PARA QUE SE CREE LA TABLA LA PRIMERA VEZ Y LUEGO COMENTAR
    res.render("index",{productos})

})


initWsServer(server);


app.use("/api",mainRouter) //Todo lo que empieze con /api lo maneja mainRouter que viene desde rouer/index.js

// module.exports=server;
export default server;