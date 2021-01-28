//no olvidar el 'use strict'
'use strict';

//prueba random de funcionamiento
console.log ('hola gramola')

//ejercicio



const palabras = ['Environmental', 'Systems', 'Research', 'Institute'];
const alargame = palabras.reduce ((acc, current) => {
    if (acc.lenght > current.lenght) {
        return acc
    }   else {
        return current
    }
});

console.log ("La palabra más larga del array " + "[" + palabras + "]" + " es " + alargame)

