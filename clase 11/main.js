// si declare la funcion con function no importa donde ejecute la funcion;
// saludar();

// Asi delcaro 
function saludar(){
    
    alert("Hola")
    // Aca va ir todo el codigo que querramos ejecutar
};

// Otra forma de crear funciones;
const saludar2 =()=>{
    console.log("Hola dos");
};
// Asi ejecuto
// saludar2();


// const h1 = document.querySelector("h1");
const h1ConClase = document.querySelector(".titulo");
const h1ConId = document.querySelector("#tituloId");
// console.log(h1);
// console.log(h1ConClase);
// console.log(h1ConId);


function cambiarEstiloDelH1(){
    h1.textContent="Hola ahora soy un h1 pero desde js";
    h1.style.color="red";
};

// cambiarEstiloDelH1();
// const btn = document.querySelector("#btn");
// console.log(btn)

const span =document.getElementById("span");

// De esta forma no puedo agregar un escuchador de eventos.
// const span2 = document.getElementsByTagName("span");
// console.log(span2);
// span2.addEventListener("click", cambiarEstiloDelH1); 
// console.log(span);

// span.addEventListener("click", cambiarEstiloDelH1);

// const img = document.getElementById("img");
// console.log("img")
// img.setAttribute("src", "./meme1.jpg");
// img.setAttribute("width", "100%")
// img.setAttribute("alt", "Img");

// const h1 = document.getElementById("h1");
// console.log(h1);
// h1.textContent="Hola";
// h1.innerHTML=`hola soy un <span style="color:Red;">H1</span>`;

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
// console.log(btn2)


function bajar (){
    btn2.scrollIntoView({
        behavior:"smooth",
        block:"end"
    });
};

function subir (){
    btn1.scrollIntoView({
        behavior:"smooth",
        block:"start"
    });
}

// Es para llamar a mas de un elemento, esto me devuelve una NodeList. Despues tengo que ver que puedo realizar con esa NodeList
// const spanes = document.querySelectorAll(".clase");
// console.log(spanes);

const div = document.getElementById("div");
const p = document.createElement("p");
p.textContent="Soy un parrafo de puro Js";

div.appendChild(p);

// p.classList.add("p");
// p.classList.remove("p");


// EL toggle lo que hace es, si un elemento tiene una clase la quita, si no la tiene la agrega
// classList.add se usa para agregar una clase ya definida en Css
//classList.remove se usa para quitar una clase
// function toggle (){
//     p.classList.toggle("p");
//     console.log("algo")
// }



const btn = document.getElementById("btn");
btn.addEventListener("click", function(){
    p.classList.toggle("p");
    console.log("algo")
});



// btn.addEventListener()
