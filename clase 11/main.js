// const title = document.getElementById("title");
// const parrafo  = document.getElementsByClassName(".parrafo");
// const parrafoTag = document.getElementsByTagName("p");
// const spanes = document.querySelectorAll(".span");
const div = document.querySelector(".div");
    
// const img = document.createElement("img");
const h1 = document.createElement("h1");
h1.textContent="Hola soy un h1 desde Javascript"
h1.setAttribute("style", "text-align: center; color:gold; text-transform:uppercase;");
// img.setAttribute("src", "./meme1.jpg");
// img.setAttribute("width", "100%");
div.appendChild(h1);
// div.appendChild(img);


const divNuevo = document.createElement("div");
// const h2 = document.createElement("h2");
// h2.setAttribute("style", "color:white; text-align:center;")
// h2.textContent="Hola a todos como andan?";
// divNuevo.appendChild(h2)

// function saludar (){
//     alert("Aloha")
// }

// divNuevo.innerHTML=` 
// <div>
//     <h4>Lavarropa Dreams</h4>
//     <p>Este lavarropa cuanta con capacidad pqara cargar 8 kilos</p>
//     <a src="https://mercadolibre.com">Conoce mas</a>
//     <br>
//     <button onClick="saludar()">Comprar</button>
// </div>
// `

divNuevo.setAttribute("style", "border:2px solid gold; background:white; text-align: center;");
// divNuevo.style.background="blue";
// divNuevo.style.textAlign="center";
// div.appendChild(divNuevo);

// divNuevo.addEventListener("mouseover", function(){
//     console.log("Mouseover");
// });

// function bajar (){
//     const btn2 = document.getElementById("btn2");
//     btn2.scrollIntoView({
//         behavior:"smooth",
//         block:"start"
//     })
// };
// function subir (){
//     const  btn1 = document.getElementById("btn1");   
//     console.log(btn1) 
//     btn1.scrollIntoView({
//         behavior:"smooth", 
//         block:"end"
//     })
// };
let contador = 5


const span = document.createElement("span");
span.textContent=contador;
function incicarContador (){
    interval= setInterval(function (){
        contador -=1;
        console.log(contador);
        span.textContent=contador;
        if (contador === 0){
            clearInterval(interval);
            span.textContent="Termino tu tiempo";
        }
    },1000);
    divNuevo.appendChild(span);
    div.appendChild(divNuevo);
};

incicarContador();