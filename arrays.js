const original = ['Rojo', 'Verde', 'Azul', 'Amarillo'];
// -------
let indiceAmarillo = null;
let cantidadColoresConA = 0;
let arregloSinAzul = [];
let ordenadoPorCantidadLetras = [];
let arregloConNuevoColorInicio = [];
let arregloConNuevoColorFin = [];


indiceAmarillo = original.indexOf('Amarillo');

for (let i = 0; i < original.length; i++) {
    let cantidadActual = original[i].toUpperCase();
    if (cantidadActual.includes('A')) {
        cantidadColoresConA++;
    }
}
console.log(cantidadColoresConA);


let colorAzul = original.indexOf('Azul');
if(colorAzul > -1){
    original.splice(colorAzul,1);
    arregloSinAzul = original;
}
console.log(arregloSinAzul);


function comparar(a,b) {
    return a.length - b.length;
}
ordenadoPorCantidadLetras = original.sort(comparar);

console.log(ordenadoPorCantidadLetras);


original.unshift('Rosa');
arregloConNuevoColorInicio = original;
console.log(arregloConNuevoColorInicio);


original.push('Violeta');
arregloConNuevoColorFin = original;
console.log(arregloConNuevoColorFin);
