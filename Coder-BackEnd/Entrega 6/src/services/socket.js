const socketIo=require("socket.io");
const {instanciaDeProductos}=require("../controller/logicaProducts");

let io;

const initWsServer=(server) => {
    io=socketIo(server)

    io.on("connection",async (socket) =>{
    
        console.log("Se conecto un nuevo cliente =)")

        data= await instanciaDeProductos.getAll();
        socket.emit("server:productos",data)

        socket.on("cliente:nuevoproducto", async (data)=>{
            // console.log(data)
            await instanciaDeProductos.save(data);

        })


    })
    return io;
}

const getWsServer = () => {
    return io;
}


module.exports={
    initWsServer,
    getWsServer
};