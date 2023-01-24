// const Server= require("./services/server")
import server from "./services/server.js";



const puerto=8080;
server.listen(puerto, () =>{
    console.log( `Servidor escuchando en el puerto ${puerto} `)
});

