import {dbOptions} from "../options/db.js";
import knex from "knex";

class mysql2{
    constructor () {
        const config=dbOptions["mysql"]
        this.knex= knex(config)
    }


    async createTables (){
        await this.knex.schema.dropTableIfExists('products')
        await this.knex.schema.createTable('products', table =>{
            table.increments('id').primary()
            table.string('title' , 50).notNullable()
            table.decimal('price').notNullable()
        })
    }
    async getAll(){
        return await this.knex.from('products').select('*')
    }
    async insertData(data){
        return await this.knex('products').insert(data)
    }

}

export const mySql = new mysql2() 


