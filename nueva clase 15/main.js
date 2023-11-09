const {log}= console;
const nav = document.getElementById("nav");
const btnBars = document.getElementById("fa-bars");

// llamo a los elementos necesarios para mostrar las cards
const estacionesHtml = document.getElementById("todas-estaciones");

const filtrar = document.getElementById("filtrar");
log(filtrar)

function depliegueNav(){
    nav.classList.toggle("nav-visible");
};

function cerrarNav (e){
    if(e.target.classList.contains("nav-item")){
        depliegueNav();
    };
};

let data=[];

async function obtenerDatos(){
    await fetch("./data.json")
    .then( async respuesta =>{
        data = await respuesta.json();
        mostrarTarjetas(data);
    });
};


function crearTarjetaHtml(estacion){
    const {nombre, imagen}= estacion;
    return `
    <div class="card">
    <h3>${nombre}</h3>
    <img src="${imagen}" alt="" class="img-card" />
    <div class="info-card">
      <span>Categorioa: ${estacion.categoria}</span>
      <div class="actividades">
        <span>Las mejores acttividades para este mes son:</span>
        <ul>
            ${crearHtmlActividades(estacion.actividades)}
        </ul>
      </div>
    </div>
  </div>
    `
};

function crearHtmlActividades(arrayActvidades){
    let resultado = arrayActvidades.map(actividad => `<li><i class="fa-solid fa-check"></i>${actividad}</li>`).join("");
    return resultado;
}
function mostrarTarjetas (arrayDeEstaciones){
    // log(arrayDeEstaciones)
    estacionesHtml.innerHTML= arrayDeEstaciones.map(estacion =>crearTarjetaHtml(estacion)).join("");
};


function aplicarFiltros(e){
    if(e.target.classList.contains("btn-estacion")){
        if(e.target.value==="todos"){
            mostrarTarjetas(data);
        } else {
            let valor = e.target.value;
            log(data)
            let daltosFiltrados = data.filter(estacion=> estacion.categoria === valor);
            log(daltosFiltrados);
            mostrarTarjetas(daltosFiltrados);
        };
    };
};

function iniciar (){
    btnBars.addEventListener("click", depliegueNav);
    nav.addEventListener("click", cerrarNav);
    obtenerDatos();
    filtrar.addEventListener("click", aplicarFiltros);
}

iniciar();



