/*
    Dado 3 numeros, tengo que indicar cual es el numero mayor 
    y el segundo mayor.
*/

const num1 = 90;
const num2 = 50;
const num3 = 60;
let mayor;
let segMayor;
if (num1 > num2 && num1 > num3) {
    console.log(`${num1} es 1º mayor`)
    mayor = num1;
    if(num2 > num3){
        console.log(`${num2} es 2º mayor`)
        segMayor = num2;
    }
    else{
        console.log(`${num3} es el 2º mayor`)
        segMayor = num3;
    }
}
else if (num2 > num1 && num2 > num3) {
    console.log(`${num2} es 1º mayor`)
    mayor = num2;
    if(num1 > num3){
        console.log(`${num1} es 2º mayor`)
        segMayor = num1;
    }
    else{
        console.log(`${num3} es el 2º mayor`)
        segMayor = num3;
    }
}else {
    console.log(`${num3} es 1º mayor`)
    mayor = num3
    if(num2 > num1){
        console.log(`${num2} es 2º mayor`)
        segMayor = num2;
    }
    else{
        console.log(`${num1} es el 2º mayor`)
        segMayor = num1;
    }
}

console.log(`El numero mayor es: ${mayor}`);
console.log(`El numero mayor es: ${segMayor}`);