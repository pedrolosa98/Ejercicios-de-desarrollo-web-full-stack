/*
    dos input para los numeros y
    4 botones (+, -, *, /)
    pintar el resultado correspondiente al pulsar el boton
    boton reset, devuelve los input y el resultado en vacio
*/
const resetear = document.querySelector("#reset");
const result = document.querySelector(".result");
const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const suma = document.querySelector("#btn1");
const resta = document.querySelector("#btn2");
const division = document.querySelector("#btn3");
const multiplicacion = document.querySelector("#btn4");



function handleSuma(event) {
    event.preventDefault();
    result.innerHTML = parseInt(num1.value) + parseInt(num2.value);
}

suma.addEventListener("click", handleSuma);


function handleResta(event) {
    event.preventDefault();
    result.innerHTML = parseInt(num1.value) - parseInt(num2.value);
}

resta.addEventListener("click", handleResta);


function handleDivision(event) {
    event.preventDefault();
    result.innerHTML = parseInt(num1.value) / parseInt(num2.value);
}

division.addEventListener("click", handleDivision);


function handleMultiplicacion(event) {
    event.preventDefault();
    result.innerHTML = parseInt(num1.value) * parseInt(num2.value);
}

multiplicacion.addEventListener("click", handleMultiplicacion);

function reset(event) {
    event.preventDefault();
    num1.value = "";
    num2.value = "";
    result.innerHTML = "";
}
resetear.addEventListener("click", reset);