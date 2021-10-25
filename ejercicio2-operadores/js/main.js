console.log("Ready :)");
//tipos

//number
const precioProducto = 150;
const precio = 100.90;

//string
const name = "dayana"; //Las cadenas de caracteres siempre con comillas simples o dobles.


//booleanos = true or false
const hijos = true;

//undefined
const apellido = undefined;
const title =document.querySelector("title");
console.log(title.value);


// Operadores
// Operadores Aritmeticos + - / * % -->Resto de una division --> %
const numA = 50;
const numB = "20";
const numC = 3;
const resultado = numA - numB;
console.log(resultado);
console.log("El resultado es " + resultado);
const resto = numA % numC;
console.log(resto);

// Operadores de comparación
// > < >= <= === !==
const compNum = 20 > 10;
console.log(compNum);

const compNum1 = "20" === 20;
console.log(compNum1);

//.toLowerCase() para poner toda la cadena de caracteres en minuscula
const compCadenas = "Pedro".toLowerCase() === "PEDRO".toLowerCase();
console.log(compCadenas);

const compCadenas1 = "Pedro" > "luis";
console.log(compCadenas1);


//Concatenacion de Cadenas
const nombre = "Sonia"
const apellido2 = "Ruiz"

//concatenacion con + desde console.log
console.log("Bienvenida " + nombre + " " + apellido2 + " " + "Madrid" + " " + "28005" + " ");
//concatenacion con ${VARIABLE}
console.log(`Bienvenida ${nombre} ${apellido2}`);
























