//no olvidar el 'use strict'
'use strict';

//prueba random de funcionamiento
console.log ('hola cavernícola')

//ejercicio probado con for-of

const notas = [6, 7, 2, 9, 3, 4, 5, 8, 2, 5, 7];

let completo = 0;
for (let sumatorio of notas) {
  completo += sumatorio;
};
console.log("Utilizando for...of la puntuación final es" + " " + completo);
