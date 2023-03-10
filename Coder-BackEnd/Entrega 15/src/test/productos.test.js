import { ProductsModel } from '../models/productos.js';
import mongoose from 'mongoose';
import app from "../index.js"
import request from 'supertest';




describe('TestsProducts', () => {
    beforeAll(async() =>{
        if(mongoose.connection.readyState === 0) {
            await mongoose.connect("mongodb://localhost:27017/coderhouse")
        } 
    })
    afterAll(async() => {
        await mongoose.disconnect();
        await mongoose.connection.close();
    });

    it('CreateProduct', async ()=>{
        const doc = {
            name:"camara",
            description:" de fotos",
            price:"123",
            stock:"123",
            categoryId:"640273904885801b64e2e55c"
        }
        
        const response = await request(app).post('/api/productos').send(doc)
        expect(response.statusCode).toBe(200)
    });

})