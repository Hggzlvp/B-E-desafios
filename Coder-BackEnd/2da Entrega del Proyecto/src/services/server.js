import express from "express"
const app=express();
import path from "path"
import { fileURLToPath } from "url";

//Importando mainRouter desde routes/index.js
import mainRouter from "../routes/index.js"


//settings
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'));
//setting de EJS
const __filename= fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename);
app.set("views",path.join(__dirname,"../../views"))
app.set("view engine","ejs")



app.use("/api",mainRouter) //Todo lo que empieze con /api lo maneja mainRouter que viene desde router/index.js


app.get("/",async (req,res)=>{
    
    res.render("index")

})


export default app;