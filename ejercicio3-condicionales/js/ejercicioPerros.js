/*
    Conversor de edad de perros a humanos:
    - el primer año de un perro equivale a 15 años de un humanos
    - el segundo año de un perro equivale a 9 años de un humano
    - a partir del tercer año, cada año del perro equivale a 5 años de un humano
*/

const edadPerro = 5;
let edadPersona;

if(edadPerro === 1){
    console.log("El perro tendria 15 años si fuera un humano")
}
else if (edadPerro === 2) {
    let suma = 15 + 9;
    console.log(`El perro tendria ${suma} años si fuera un humano`)
}
else {
    let total = 24 + ((edadPerro -2) * 5)
    console.log(`El perro tendria ${total} años si fuera un humano`)
}