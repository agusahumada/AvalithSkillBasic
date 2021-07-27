const stringA = 'Rojo,Verde,Amarillo,Azul';
const stringB = 'Sergio';
const stringC = 'Damian';
const stringD = 'Mi nombre es Damian y tengo 28 años';
// -------
let tamanioA = 0;
let cantidadLetraR = 0;
let nombreCompleto = '';
let fraseOtroNombre = '';
let posicionNombre = null;
let arregloParseado = [];


// - tamanioA: Tamaño del string A
tamanioA = stringA.length;

// - cantidadLetraR: Cuantas letras R (Mayuscula o minuscula) hay en el string A
let nuevoArray = stringA.split(',');

for (let i = 0; i < nuevoArray.length; i++) {
    let arrayMayusculas = nuevoArray[i].toUpperCase(); 
    if (arrayMayusculas.includes('R')) {
        cantidadLetraR++;
    }
}

// - nombreCompleto: Formar el nombre completo a partir de los strings B y C
nombreCompleto = `${stringB} ${stringC}`;

// - fraseOtroNombre: Cambiar el nombre 'Damian' del string D con el nombre del string B
fraseOtroNombre = stringD.replace('Damian', stringB);

// posicionNombre: Posicion de 'Damian' en el string D
posicionNombre = stringD.indexOf('Damian');

// - arregloParseado: Arreglo formado a partir del string A
arregloParseado = nuevoArray;


console.log(tamanioA);
console.log(cantidadLetraR);
console.log(nombreCompleto);
console.log(fraseOtroNombre);
console.log(posicionNombre);
console.log(arregloParseado);