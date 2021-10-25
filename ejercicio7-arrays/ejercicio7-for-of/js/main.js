// for of

const ul = document.querySelector(".lista");
const nombresEs = ["pedro", "beatriz", "sonia", "maria", "alberto", "ayoub"];
//FOR OF
for (const nombre of nombresEs){
console.log(nombre);
ul.innerHTML += `<li>${nombre}</li>`;
}

// FOR CLASICO

for (let i = 0; i < nombresEs.length; i++) {
    ul.innerHTML += `<li>${nombresEs[i]}</li>`
    
}


/*********************************************************/


const btns = document.querySelectorAll(".btn");
console.log(btns);
const handleClick = (event) => {
    const body = document.querySelector("body");
    body.classList.remove("blanco","rojo","verde")
    body.classList.add(event.target.id)
    console.log(event.target.id)
}
for (const btnEle of btns) {
    btnEle.addEventListener("click", handleClick)
}