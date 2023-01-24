import {Server} from "socket.io"
// const socketIo = require("socket.io")
import {mySql} from "../controller/mySql.js";



let io;

export const initWsServer=(server) => {
    io=new Server(server)

    io.on("connection",async (socket) =>{
    
        console.log("Se conecto un nuevo cliente =)")

        socket.on("cliente:nuevoproducto", async (data)=>{
            // console.log(data)
            await mySql.insertData(data); //save(data)

            const prod =await mySql.getAll();
            socket.emit("server:productos",prod)

        })


    })
    return io;
}

export const getWsServer = () => {
    return io;
}


// module.exports={
//     initWsServer,
//     getWsServer
// };