// filter
// console.log(numeros);
// numeros = numeros.filter(i => i !=2);
// console.log(numeros);
// map

// let resultadosDuplicados =  numeros.map(numero => numero*2);
// console.log(resultadosDuplicados);

// foreach

// let resultadosDuplicados=[];
// numeros.forEach(numero => resultadosDuplicados.push(numero*2));
// console.log(resultadosDuplicados);

// numeros.map(numero=> console.log(numero));
// const div = document.getElementById("div");
// console.log(div);
// let numeros =[1,2,3,4,5];

// function mostrarNumeroEnPantalla(numero){
//     return `
//     <h2>${numero}</h2>
//     `
// };


// div.innerHTML = numeros.forEach(numero=>mostrarNumeroEnPantalla(numero));



// POO

// const array =[{},{}];

// Ejemplo de objeto
const mouse ={
    // Atributos
    marca:"logiTech",
    color:"rojo",
    peso:150,

    // Getters Seters
    
    getMarca(){
        console.log(`soy un mouse marca ${this.marca}`)
    },
    setMarca(marca){
        // console.log(marca)
        console.log(this.marca)
        this.marca= marca;
        console.log(this.marca);
    },
    getPeso(){
        console.log(this.peso);
    },
    setPeso(peso){
        this.peso = peso
    },
    getColor(){
        console.log(this.color)
    },
    setColor(color){
        this.color= color;
    },


    // Metodos
    clickDerecho(){
        console.log("Click derecho");
    },

    scroll(){
        console.log("Lo que yo ponga aca")
    },


};

// console.log(mouse);
// console.log(mouse.color);
// console.log(mouse.marca);
// mouse.clickDerecho();
// mouse.scroll();
// mouse.getMarca();
// mouse.setMarca("razer");

// mouse.clickDerecho();
// mouse.getPeso();
// mouse.setPeso(200);
// mouse.getPeso();




// const turno = new Turno("Roberto", "Color", 10);
// const turno2 = new Turno("Mattw", "cortar", 11);
// turno.descripcion();
// turno2.descripcion();
// turno.setNombre();
// turno.setNombre("Jorge");
// turno.getNombre();


const nombreInput = document.getElementById("nombre");
const horaInput = document.getElementById("hora");
const form = document.getElementById("form");
const todosLosTurnos = document.getElementById("todosLosTurnos");
console.log(todosLosTurnos)


let arrayTurnos=[];

class Turno {
    constructor(nombre, hora){
        this.nombre = nombre;
        // this.servicio= servicio;
        this.hora = hora
    }
    descripcion(){
        console.log(`Hola ${this.nombre}, tu turne de ${this.servicio} es a las ${this.hora}`)
    };
    getNombre(){
        console.log(this.nombre)
    }
    setNombre(nombre){
        this.nombre=nombre;
    }
};

function crearTurno(){
    const nombre = nombreInput.value;
    const hora = horaInput.value;

    arrayTurnos.push(new Turno(nombre, hora))
    form.reset()
    mostrarTurnos(arrayTurnos)
    
}

function mostrarTurnos(arrayTurnos){
    todosLosTurnos.innerHTML= arrayTurnos.map(turno=>crearTurnoHtml(turno)).join("");
}

function crearTurnoHtml(turno){
    return `
        <div class="card-turno">
        <p>El turno para ${turno.nombre} es a las ${turno.hora}</p>
        </div>
    `
}




form.addEventListener("submit", (e)=>{
    e.preventDefault()
    crearTurno()
})