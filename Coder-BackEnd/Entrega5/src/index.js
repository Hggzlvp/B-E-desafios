const express= require("express");
const app=express();
const path= require("path")
require("ejs")
//Importando las rutas desde routes/index.js
const HomeRoutes=require("./routes/index")

//Settings
app.set("case sensitive routing",true)
app.set("views",path.join(__dirname,"views"))
app.set("view engine","ejs")


//Middlewares
app.use(express.static(path.join(__dirname,"public")));
app.use(express.text())
app.use(express.json())
app.use(express.urlencoded({extended:false}))

// Utilizando las rutas importadas desde routes/index.js
app.use(HomeRoutes)

app.listen(8080)
console.log("Escuchando en el puerto 8080")