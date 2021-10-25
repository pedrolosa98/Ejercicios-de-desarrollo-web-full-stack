/*
    form --> precio producto y la cantidad a comprar
    tienda donde vamos a comprar X cantidad de productos
    si la cantidad de productos a comprar esta entre 12 y 24, 
    se le calcula un descuento de un 10% sobre el total a pagar.

    si la cantidad de productos a comprar esta entre 24 y 100, 
    se le calcula un descuento de un 15% sobre el total a pagar.
    
    si la cantidad de productos a comprar son + 100 productos, 
    se le calcula un descuento de un 30% sobre el total a pagar.


    generamos la factura y la pintamos en el HTML en un parrafo
    desglosado


    funciones --> descuento, total, pintarHTML
*/
const precio = parseInt(document.querySelector("#precio").value);
const cantidad = parseInt(document.querySelector("#cantidad").value);

const descuento = (cant, pre) => {
    let calcDesc = 0;
    if (cant >= 12 && cant <= 24) {
        calcDesc = (pre * cant) * 0,10;
    }
    else if (cant > 24 && cant <= 100) {
        calcDesc = (pre * cant) * 0,15;
    }
    else if (cant > 100) {
        calcDesc = (pre * cant) * 0,30;
    }
    return calcDesc;
}

const total = function (cant, pre) {
    let totalPagar = cant * pre;
    return totalPagar;
}

function pintarHtml (cant, pre) {
    const parrafo = document.querySelector(".texto");
    parrafo.innerHTML = `El total a pagar es: ${total(cant, pre) - descuento(cant, pre)}`;
}

pintarHtml(cantidad, precio);