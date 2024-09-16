//obtener el elemento por ID
let parrafo = document.getElementById(miParrafo);
console.log(parrafo.textContent);
let boton = document.getElementById("miBoton");
boton.addEventListener("click", function(){
    parrafo.textContent = "texto Actualizado";
    console.log(parrafo.textContent);
})
