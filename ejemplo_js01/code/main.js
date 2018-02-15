function arroz_con_pollo() {
    alert("Yanbal pide comida!");
}

window.addEventListener('load', onLoadWindow);

function onLoadWindow() {
    var boton = document.getElementById("btnComida");
    boton.addEventListener('click', arroz_con_pollo);
    
    var instancia = new Persona();
    instancia.Initialize();
    
    alert("Nombres: " + instancia.GetNombre() + " " + 
        instancia.GetApellido() + " calza: " + 
        instancia.calza);
}

