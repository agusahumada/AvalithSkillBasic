const originalA = {
    nombre: 'Sergio',
    edad: 28,
    preferidos: ['Pizza', 'Hamburguesa'],
    madre: {
        nombre: 'Sandra',
        edad: 54,
    },
};
const originalB = '{"nombre":"Damian","edad":26}';
// -------
let edadMadre = 0;
let objetoParseado = null;
let existeClaveMadreA = null;
let existeClaveMadreB = null;
let nombreDelMasJoven = null;
let clavesDelObjeto = [];


// - edadMadre: Edad de la madre
edadMadre = originalA.madre.edad;

// - objetoParseado: Objeto "originalB" parseado a objeto
objetoParseado = JSON.parse(originalB);

// - existeClaveMadreA: Si existe la clave madre en el objeto 'originalA'
// - existeClaveMadreB: Si existe la clave madre en el objeto 'originalB'
function claveMadre(objeto) {
    if (objeto.madre) {
        return true;
    }else{
        return false;
    }
}
existeClaveMadreA = claveMadre(originalA);
existeClaveMadreB = claveMadre(objetoParseado);

// - nombreDelMasJoven: Nombre de la persona mas joven
function masJoven(objectA, objectB) {
    if ( objectA.edad < objectB.edad) {
        return objectA.nombre; 
    }else{
        return objectB.nombre;
    }
}
nombreDelMasJoven = masJoven(originalA,objetoParseado);

// - clavesDelObjeto: Que claves contiene el objeto 'originalA'
clavesDelObjeto = Object.keys(originalA);


console.log(edadMadre);
console.log(objetoParseado);
console.log(existeClaveMadreA);
console.log(existeClaveMadreB);
console.log(nombreDelMasJoven);
console.log(clavesDelObjeto);