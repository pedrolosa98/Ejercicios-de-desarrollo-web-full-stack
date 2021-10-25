/*
    Crea un DIV que contenga un titulo "NOTIFICACION" y un 
    texto que diga "Mensaje por defecto"

    Crea tambien tres clases:
    La primera,
    .success, aplicara un borde verde oscuro, un fondo verde claro y 
    el color de fuente verde oscuro.
    La segunda,
    .error, igual pero sustituyendo el verde por rojo.
    La tercera,
    .warning, lo mismo pero usando el color amarillo
    
    Usando JavaScript,
    Haremos que,
    Si contiene la clase js-alerta, el titulo sea 'AVISO' y el texto sea: 'Tenga Cuidado',
    añadir la clase warning
    Si contiene la clase js-error, el titulo sea 'ERROR' y el texto sea: 'Ha surgido un error',
    añadir la clase error.
    Si contiene la clase js-exito, el titulo sea 'CORRECTO' y el texto sea: 'Los datos son correctos',
    añadir la clase success

    Cambia la clase en HTML y comprueba que el codigo de JavaScript funciona.
*/
//elemt.classlist.add("ClaseAñadir");
//elemt.classlist.contains("js-alerta");

const titulo = document.querySelector(".titulo");
const texto = document.querySelector(".texto");
const contenedor = document.querySelector(".container");

if (contenedor.classList.contains("js-alerta")) {
    titulo.innerHTML = "AVISO";
    texto.innerHTML = "Tenga Cuidado"
    contenedor.classList.add("warning");
}
else if (contenedor.classList.contains("js-error")) {
    titulo.innerHTML = "ERROR";
    texto.innerHTML = "Ha surgido un error"
    contenedor.classList.add("error");
}
else if (contenedor.classList.contains("js-exito")) {
    titulo.innerHTML = "CORRECTO";
    texto.innerHTML = "Los datos son correctos"
    contenedor.classList.add("success");
}
else{
    contenedor.classList.add("original");
}