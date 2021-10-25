
const form = document.querySelector(".form");
const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const p = document.querySelector(".result");
// const reset = document.querySelector("#reset");

function reset() {
    num1.value = "";
    num2.value = "";
    p.innerHTML = "";
}

function handleForm(ev) {
    // debugger;
    ev.preventDefault();
    const elementoClicado = ev.target.value;
    const num1Value = parseInt(num1.value);
    const num2Value = parseInt(num2.value);
    let result = "";
    if (elementoClicado === "+") {
        result = num1Value + num2Value;
    }
    else if (elementoClicado === "-") {
        result = num1Value - num2Value
    }
    else if (elementoClicado === "*") {
        result = num1Value * num2Value;
    }
    else if (elementoClicado === "/") {
        result = num1Value / num2Value;
    }

    p.innerHTML = result;

    if (elementoClicado === "reset") {
        reset();
    }
}

form.addEventListener("click", handleForm);