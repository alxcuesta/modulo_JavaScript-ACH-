//no olvidar el 'use strict'
'use strict';

//prueba random de funcionamiento
console.log ('hola Peñiscola')

//ejercicio

const palabrejas = ['Uno', 'Dos', 'Tres', 'Cuatro', 'Cinco', 'Seis'];
const mayusTodas = palabrejas.map(eachTopic => eachTopic.toUpperCase());

mayusTodas.reverse();

console.log('Aqui las palabras originales', palabrejas);
console.log('Aqui las palabra en mayúscula', mayusTodas);