import {logger} from '../../../logs/news.logs.js'; 
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

export default class DaoMongo {
    static init() {
        mongoose.connect(process.env.MONGO_URL, (err) => {
            if(err){
                logger.fatal(err)
            } else {
                logger.info('Conectado a MongoDB!')
            }
        });
    }



}