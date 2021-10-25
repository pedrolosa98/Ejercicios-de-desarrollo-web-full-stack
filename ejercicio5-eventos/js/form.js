//cuando carga la pagina
const form = document.querySelector(".form")
const nombre = document.querySelector("#nombre");
const pais = document.querySelector("#pais");
const estado = document.querySelector(".estado")
const p = document.querySelector(".msj")

//cuando ocurre el evento submit
const handleForm = (event) => {
    event.preventDefault();
    const nombreValue = nombre.value;
    let paisValue = pais.value;
    let estadoValue = estado.value;

    p.innerHTML = `Hola ${nombreValue}`

    if (paisValue === "1") {
        p.innerHTML += " Eres Europeo"
    }
    else if (paisValue === "2") {
        p.innerHTML += " Eres Asiatico"
    }
    else if (paisValue === "3") {
        p.innerHTML += " Eres de America latina"
    }

    if (estadoValue === "s") {
        p.innerHTML += " y tu estado civil es soltero"
    }
    else if (estadoValue === "c") {
        p.innerHTML += " y tu estado civil es casado"
    }
    else if (estadoValue === "v") {
        p.innerHTML += " y tu estado civil es viudo"
    }
}

form.addEventListener("submit", handleForm);