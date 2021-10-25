const frutas = ["coco", "platano", "mango", "piña"];

console.log(frutas[2]);

frutas[2] = "pera";
console.log(frutas[2]);

const index = 1;
const edades = [20, 25, 30];
console.log(edades[index]);
console.log(edades.length);
console.log(frutas.length);

const edadesEstudi = edades;
edades[0] = 30;
console.log(edadesEstudi)

console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);
console.log(frutas[3]);


// bucles for() // for-of // do-while

for(let i = 0; i < frutas.length; i++){
    console.log(frutas[i]);

}

const precios = [150,88,66,99,100];
let suma = 0;
let promedio = 0;
for(let i = 0; i < precios.length; i++){
    suma += precios[i];
    
    promedio = suma / precios.length

}
console.log(suma);
console.log(promedio);

/*
se produjo una en 2017
pintar lunas de cazador
cada 3 años
*/

let year = 2017;
for (let i = 0; i < 15; i++) {
    year = year + 3;
    console.log(year);
}
