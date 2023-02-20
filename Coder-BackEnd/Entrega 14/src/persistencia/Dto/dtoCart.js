export default class CartsDTO{
    constructor({name,description,price,stock,categoryId}){
        this.name = name
        this.description=description
        this.price = price
        this.stock = stock
        this.categoryId = categoryId
    }
}

export const cartsDto = (data) => {
    if(Array.isArray(data)){
        return data.map(cart => new CartsDTO(cart))
    }else{
        return new CartsDTO(data)
    }
}
