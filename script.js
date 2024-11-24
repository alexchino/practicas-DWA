const infoParrafo = document.getElementById("info");
const modificarbtn = document.getElementById("modificar-btn");
const guardarbtn = document.getElementById("guardar-btn");
const crearParrafoBtn = document.getElementById("crear-parrafo-btn");
const crearBotonBtn = document.getElementById("crear-boton-btn");
const contenedor = document.getElementById("contenedor");

window.onload = function () {
    const textoGuardado = localStorage.getItem("textoInfo");
    if (textoGuardado) {
        infoParrafo.textContent = textoGuardado;
    }
    const elementosGuardados = localStorage.getItem("contenedorHTML");
    if (elementosGuardados) {
        contenedor.innerHTML = elementosGuardados;
    }
};

function modificarTexto() {
    const nuevoTexto = prompt("Introduce el nuevo texto:");
    if (nuevoTexto) {
        infoParrafo.textContent = nuevoTexto;
        console.log("Texto modificado:", infoParrafo.textContent);
    }
}

function guardarCambios() {
    localStorage.setItem("textoInfo", infoParrafo.textContent); // Usar setItem para guardar
    localStorage.setItem("contenedorHTML", contenedor.innerHTML);
    alert("Cambios guardados exitosamente.");
}

function agregarParrafo() { // Corregido el nombre de la función
    const nuevoParrafo = document.createElement("p");
    nuevoParrafo.textContent = "Este es el nuevo párrafo creado dinámicamente.";
    contenedor.appendChild(nuevoParrafo);
    console.log("Párrafo añadido:", nuevoParrafo);
}

function agregarBotonConEvento() {
    const nuevoBoton = document.createElement("button");
    nuevoBoton.textContent = "Botón dinámico";
    nuevoBoton.addEventListener("click", () => {
        alert("Botón dinámico creado.");
    });
    contenedor.appendChild(nuevoBoton);
    console.log("Botón añadido con evento:", nuevoBoton);
}

// Asignación de eventos
modificarbtn.addEventListener("click", modificarTexto);
guardarbtn.addEventListener("click", guardarCambios);
crearParrafoBtn.addEventListener("click", agregarParrafo);
crearBotonBtn.addEventListener("click", agregarBotonConEvento);
