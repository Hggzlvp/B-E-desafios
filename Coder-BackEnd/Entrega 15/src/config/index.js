import dotenv from 'dotenv';

dotenv.config();

export default {
    MONGO_ATLAS_URL:  'mongodb://localhost:27017/coderhouse',
    PUERTO: process.env.PUERTO || 8080,
}