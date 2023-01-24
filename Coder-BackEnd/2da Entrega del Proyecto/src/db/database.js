import mongoose from "mongoose";

const connectionString="mongodb://localhost:27017/Entrega2";

export const initMongoDb= async ()=> {
    try {
        console.log("CONECTADO A MI DB")
        await mongoose.connect(connectionString);
        console.log("YA ESTOY CONECTADO")
    } catch (error) {
        console.log(`ERROR => ${error}`);
        return error
    }
};