// CONDICIONALES

// IF - ELSE
const edad = 18;
// OPERADORES COMPARACION > < >= <= === !==
// IF COMPUESTO
if (edad >= 18) {
   console.log("Es mayor de edad");
}
else{
    console.log("No eres mayor de edad aun")
}

// IF ANIDADOS --> un IF dentro de un ELSE
// personas < 15 --> niños
// personas > 15 < 20 --> adolescentes
// personas > 20 < 60 --> adultos
// personas > 60 --> mayores
// Operadores Logicos( ||(operador logico "o" --> con que se cumpla una condicion avanza) - &&(operador logico "y" -->todas las condiciones tienen que cumplirse))
const edad1 = 61;
const edad2 = 20;
const edad3 = 40;
const edad4 = 65;
if (edad1 < 15) {
    console.log("Eres un niño");
 }
 else if (edad1 >= 15 && edad1 <= 20){
         console.log("Eres un adolescente");
     }
else if (edad1 > 20 && edad1 <= 60){
             console.log("Eres un adulto")
         }
else{
            console.log("Eres un mayor")
        }

// truthy
const name = "dayana";
// flasy
const apellido = parseInt(name);

if (name) {
    console.log(name)
}
if (!apellido) {
    console.log(apellido)    
}











 /// la de arriba o la de abajo (la de arriba es la correcta)
const age = 15;

if (age < 15) {
    console.log("Eres un niño");
 }
 else if (age < 20){
         console.log("Eres un adolescente");
     }
else if (age < 60){
             console.log("Eres un adulto")
         }
else if (age > 60){
                 console.log("Eres un mayor")
             }

 
            