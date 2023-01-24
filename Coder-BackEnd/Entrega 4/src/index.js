const Server=require("./services/server");

//Definir puerto ````
const puerto=8080;

Server.listen(puerto, () => {
    console.log(`Servidor escuchando en el puerto ${puerto}`)
});