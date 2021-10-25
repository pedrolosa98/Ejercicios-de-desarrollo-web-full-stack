//click, change, submit, onload, mouseover

const btn = document.querySelector(".btn");

function changeBackground() {
    console.log("fondo");
    const body = document.querySelector("body");
    body.classList.toggle("background");
    // if (body.classList.contains("background")) {
    //     body.classList.remove("background");
    // }
    // else{
    //     body.classList.add("background");
    // }
}

function handleBtn() {
    const texto = document.querySelector(".msj");
    texto.innerHTML = "Has pulsado el boton";
    changeBackground();
}
// handleBtn --> funcion callback --> una funcion se ejecuta con otra funcion
btn.addEventListener("click", handleBtn);