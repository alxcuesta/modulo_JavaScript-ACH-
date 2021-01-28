//no olvidar el 'use strict'
'use strict';

//prueba random de funcionamiento
console.log ('hola menosmola')

//ejercicio

const notas = [60, 75, 79, 80, 55, 59];
const notasNum = notas.length;
const suma = notas.reduce((acc, current) => acc + current);
const mediaFinal = suma/notas.length;

console.log ("La media del array [" + notas  + "]" + " es " + mediaFinal)