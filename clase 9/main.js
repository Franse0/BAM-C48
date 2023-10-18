// Para abir un mensaje de alerta
// alert("Hola mundo");

// Para imprimir en consola
// console.log("Hola desde consola");

// var tipoDato= "Hola";
// console.log(tipoDato);
// var tipoDato=2;

// const tipoDatoConst = "soy una constante";
// tipoDatoConst="soy constante otra vez"
// const tipoDatoConst =1;


// let tipoDatoLet = "Soy una variable let";
// console.log(tipoDatoLet)
// let tipoDatoLet = 123;
// tipoDatoLet=123;
// console.log(tipoDatoLet);

// var nombre = "Harry";
// var apellido = "Potter";

// console.log(nombre +" "+apellido)


// Asignar valor a una variable mediante prompt

// let num1 = 5 ;
// let num2 = 15;
// let resultado = num1 + num2;
// console.log(num2 **num1);
// let nombre = "";



// const saludar= ()=>{
//     nombre =prompt("¿Cual es tu nombre?")
//     console.log(nombre)
// }

// saludar();



// let num = 5;
// let num2 = 6;
// let str = "5";

// let boolean = false;
// console.log(boolean)
// console.log(num === str);
// console.log(5>6);
// console.log(num>num2);
// console.log(num >= num2);
// console.log(num < num2);
// console.log(num <= num2);


const btnActive = document.getElementById("btn-active");

const container = document.getElementById("container");
console.log(container);
console.log(btnActive);

let num3=3;

const modWhite =(num)=>{
    container.classList.toggle("class-white");
};

btnActive.addEventListener("click", modWhite);
