//no olvidar el 'use strict'
'use strict';

//prueba random de funcionamiento
console.log ('hola pajaro sin cola')

//ejercicio

const numeros = [253, 8575, 1, 20, 562, 1233, 25, 27, 258, 254, 7485, 2683];

const par = numeros.filter (each => each % 2 === 0 );
const impar = numeros.filter (each => each % 2 !== 0);

console.log ('El array es: ' + numeros);
console.log ("Los numeros pares del array son: " + par)
console.log ("Los numeros impares del array son: " + impar)