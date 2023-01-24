// ` ` 
class Usuario {
    constructor(nombre,apellido,libros,mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = [libros];
        this.mascotas = [mascotas];
    }

    getFullName (){
        return  `${this.nombre} ${this.apellido}`
    }
    addMascotas (nombre,raza){
        this.mascotas.push({nombre,raza})
    }
    countMascotas (){
        return this.mascotas.length
    }
    addBok (libro,autor){
        this.libros.push({libro,autor})
    }
    getBookName (){
        const nombres = [];
        for (const libros of this.libros) {
            nombres.push(libros.libro)
        }
        return nombres;
    }
}

const persona1 = new Usuario ('Hernan','Garcia',{libro:'El señor de los anillos' ,autor:'J.R.TALKIEN'},{nombre:'Isis',raza:'Gato'})


// console.log(persona1.getFullName())              /*FUNCIONA*/

// persona1.addMascotas("Pampa","Perro")            /*FUNCIONA*/

// console.log(persona1.countMascotas())            /*FUNCIONA*/

// persona1.addBok("El Ladron Mago","J.Talkien")    /*FUNCIONA*/     
                    
// console.log(persona1.getBookName())              /*FUNCIONA*
            


