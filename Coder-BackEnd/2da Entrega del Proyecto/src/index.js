import Server from "./services/server.js"
import {initMongoDb} from "./db/database.js"

const init = async () => {
    try {
        const puerto=8080;
        Server.listen(puerto, () =>{
        console.log( `Servidor escuchando en el puerto ${puerto} `)
        });
        await initMongoDb();
    } catch (error) {
        console.log(error)
    }
}

init()
