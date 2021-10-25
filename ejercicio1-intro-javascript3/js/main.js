//Para comentar una sola linea
/*Bloque de contenido para comentar*/
console.log("ready primera web :)");
//DOCUMENT, OBJECT, MODEL = DOM
//variable ---> Contenedor donde se almacenan datos : Numeros, textos, listas, etc...

// variable que nunca cambia y tiene valor fijo es constante : const
const tituloEl = document.querySelector(".js-titulo"); // document= seleccionas el documento que tenemos seleccionado , querySelector= seleccionamos el texto o numero etc, con la clase que queramos modificar
// tituloEl.style.color = "red";
tituloEl.classList.add("title"); //Añadir una clase de nuestra hojas de estilos (css)
console.log(tituloEl); // Mostramos por la consola del navegador lo que hemos cogido en la const

const parrafoEl = document.querySelector("#js-parrafo");
console.log(parrafoEl);


let nombre=""; // Creacion de variable vacia con let
console.log(nombre); // mostramos la variable nombre


nombre="sonia"; // agregamos contenido a la variable nombre
console.log(nombre); //Mostramos la variable nombre


//Tomar informacion de los formularios
const inputName = document.querySelector("#nombre");
inputName.classList.add("title");
console.log(inputName.value);

const inputApellido = document.querySelector("#apellido")
console.log(inputApellido.value);