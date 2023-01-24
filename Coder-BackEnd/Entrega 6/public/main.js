const socket = io.connect();

console.log("ESTE CODIGO SE EJECUTA EN EL CLIENTE")


const productForm=document.getElementById("productForm");
const productName=document.getElementById("productName");
const productPrice=document.getElementById("productPrice");
const productUrl=document.getElementById("productUrl")

async function createProduct(data){

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var requestOptions = {
  method: 'POST',
  body:JSON.stringify(data),
  headers: myHeaders
};

// console.log(data);

const response=await fetch(
    "http://localhost:8080/api/productos",
     requestOptions
     ).then(response => response.json());

     console.log(response.result)
  
}


productForm.addEventListener("submit", (e) =>{
    e.preventDefault();

    console.log("ALGUIEN MANDO A SUBMIT")

    const productito=({
        title:productName.value,
        price:productPrice.value,
        url:productUrl.value
    });
    
    // console.log(productito)

    socket.emit("cliente:nuevoproducto",productito);

    productName.value="";
    productPrice.value="";
    productUrl.value="";

})

socket.on("server:productos",async (data) =>{
    const productos=await data;
    // console.log(productos)
    nuevosProductos.innerHTML="";
    productos.forEach(function(p){
        nuevosProductos.innerHTML += `
        <tbody>
          <tr>
            <th scope="row">${p.id}</th>
            <td>${p.title}</td>
            <td>${p.price}</td>
            <td>${p.url} </td>
          </tr>
        </tbody> 
        `
    })
})

