const express=require("express");
const app=express();
const path=require("path")

//Importando mainRouter desde routes/index.js
const mainRouter= require("../routes/index")


//settings
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'));
//setting de EJS
app.set("views",path.join(__dirname,"../../views"))
app.set("view engine","ejs")



app.use("/api",mainRouter) //Todo lo que empieze con /api lo maneja mainRouter que viene desde rouer/index.js

app.get("/",async (req,res)=>{
    
    res.render("index")

})



app.get("/",(req,res)=>{
    res.json({
        msg:"ok app"
    })
})

module.exports=app;