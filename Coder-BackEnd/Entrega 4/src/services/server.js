// Importar Express
const express=require("express");
//Importando Router desde routes/index.js
const mainRouter=require("../routes/index");
// Crear nuestra app
const app=express();
// LINEAS
app.use(express.json());
app.use(express.urlencoded({extended: true}));

/* muestra lo que esta en public */
app.use(express.static('public'));
//Todo lo que empieze con /api lo va a manejar la constante "mainRouter"
app.use('/api', mainRouter);




app.get("/",(req,res)=>{
    res.json({
        msg:"ok app"
    })
})

app.use((err,req,res,next) => {
   const status= err.status || 500 ;
   const message = err.message || "Internal Server Error"

   res.status(status).json [{
    message,
   }]
});

module.exports=app;