const express=require("express");
// ---------------
const http=require("http");
const app=express();
const server=http.Server(app)
const {initWsServer}=require("./socket")
// ---------------
const path=require("path")
const io=require("socket.io")

//Importando mainRouter desde routes/index.js
const mainRouter= require("../routes/index")

//settings
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'));
//setting de EJS
app.set("views",path.join(__dirname,"../../views"))
app.set("view engine","ejs")


app.get("/",async (req,res)=>{
    
    res.render("index")

})


initWsServer(server);


app.use("/api",mainRouter) //Todo lo que empieze con /api lo maneja mainRouter que viene desde rouer/index.js

module.exports=server;