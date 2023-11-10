// llamo a los elementos de mi documeto
const {log}=console;

const form = document.getElementById("form");
const inputNombre = document.getElementById("nombre");
const inputUbicacion = document.getElementById("ubicacion");

const tematica = document.querySelectorAll("input[type='radio'][name='tematica']");
const disfraz = document.querySelectorAll("input[type='radio'][name='disfraz']");

const resultado = document.getElementById("resultado");


function obtenerTematica(){
    let tematicaSeleccionada="";
    tematica.forEach(tematica=>{
        if(tematica.checked){
            tematicaSeleccionada= tematica.value;
        };
    });
    log("desde funcion tematica seleccionada ",tematicaSeleccionada );
    return tematicaSeleccionada;
};

function obtenerDisfraz(){
    let usarDisfraz ="";
    disfraz.forEach(opcion=>{
        if(opcion.checked){
            usarDisfraz = opcion.value;
        };
    });

    log("desde la funcion obtener disfraz ", usarDisfraz);
    return usarDisfraz;
};

function invitacionHtml(datos){
    log("invitacion html datos" ,datos);
    return `
    <div class="card-resultado">
    <img src="./media/img_nochedebrujas.png" alt="">
    <div class="contenido-card">
      <h3>${datos.nombre}</h3>
      <p>Estas invitado a la fiesta de Halloween</p>
      <p>Tematica: ${datos.tematica}</p>
      <div class="info-card-contaianer">
        <h4>${mensajeDeTarjet(datos.disfraz)}</h4>
        <h5>Ubicacion</h5>
        <h6>${datos.ubicacion}</h6>
      </div>
    </div>
  </div>
    `;
};


function mensajeDeTarjet(valor){
    if(valor=="si"){
        return  "Sin disfraz no pasas";
    } else if(valor=="no"){
        return "Podes venir sin disfraz"
    } ;
};

function mostrarTarjeta(invitaciones){
    log("mostrar Tarjeta", invitaciones)
    if(invitaciones.length>=0){
        resultado.innerHTML= invitacionHtml(invitaciones[0]);
    }
};

class Invitacion {
    constructor(nombre,ubicacion, tematica, disfraz){
        this.nombre= nombre;
        this.ubicacion= ubicacion;
        this.tematica= tematica;
        this.disfraz = disfraz
    };
};

let invitaciones =[];

function crearTarjeta(e){
    e.preventDefault();
    const nombre = inputNombre.value;
    const ubicacion = inputUbicacion.value;
    const tematica = obtenerTematica();
    const disfraz = obtenerDisfraz();
    invitaciones.unshift(new Invitacion(nombre, ubicacion, tematica, disfraz));
    log(invitaciones);
    mostrarTarjeta(invitaciones);
    form.reset();

};

function mensajeInicia(){
    const h3 = document.createElement("h3");
    h3.textContent="Ahorra tiempo, crea tus invitaciones aca";
    h3.style.color="blue";

    resultado.appendChild(h3);
}


function iniciar(){
    form.addEventListener("submit", crearTarjeta);
    window.addEventListener("DOMContentLoaded", mensajeInicia);

}
iniciar();