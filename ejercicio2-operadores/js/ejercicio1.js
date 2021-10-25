/*
    1.- Cojemos el valor de la del input
    2.- Hacer la formula para convertir los años a horas
    3.- Pintar el resultado en el HTML
*/

let edad = document.querySelector("#edad").value;
edad = parseInt(edad);
console.log(edad);
const result = edad * 365 * 24;
console.log(result);
const parrafo = document.querySelector(".msj"); // Seleccionas la clase del parrafo que queremos modificar
parrafo.innerHTML = `Has vivido ${result} horas`; // Pintamos en el HTML el mensaje que queramos


// Operadores ternarios
const msj = result >= 500000 ? "Bravo eres un campeon" : "Aun te falta" //? --> es para escribir los mensajes de las condiciones 
console.log(msj)
parrafo.innerHTML += msj;
// parrafo.innerHTML = parrafo.innerHTML + " "  + msj;
const msj2 = result <= 500000 ? `Llevas ${edad}` : "Aun te falta" // Aqui tambien podemos poner ${} para mostrar el valor de la variable
console.log(msj2)
