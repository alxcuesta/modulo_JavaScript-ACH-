//no olvidar el 'use strict'
'use strict';

//prueba random de funcionamiento
console.log ('hola pepsicola')

//hacer un array predeterminado
const data = ["hola", 2, 5, "adios"];


// determinar cual valor númerico es mayor
console.log ('¿5 es mayor que 2?: (true o false)', data[2]>data[1]);

//buscar otras opciones para determinar el valor númerico mayor
//solo válida para array unicamente de números
var solonum = [2, 5];
var max = Math.max(...solonum);
console.log ("Si el array solo tuviera números, determinamos que el valor máximo es: "  + max)

//determina las cinco operaciones con los dos valores numéricos
var suma= data[1] + data[2];
var resta = data[1] - data[2];
var producto = data[1] * data[2];
var division = data[1] / data[2];
var cociente = data [1] % data[2];

console.log('La suma resulta: ' + suma)
console.log('La resta resulta: ' + resta);
console.log('El producto resulta: ' + producto);
console.log('La división resulta: ' + division);
console.log('El resto de la división resulta: ' + cociente);

