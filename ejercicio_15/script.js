//no olvidar el 'use strict'
'use strict';

//prueba random de funcionamiento
console.log ('hola apicola')

//ejercicio


const puntos = [
  {nombre: 'Christania Williams', country: 'Jamaica', time: 11.80},
  {nombre: 'Elaine Thompson', country: 'Jamaica', time: 10.71},
  {nombre: 'Tori Bowie', country: 'EEUU', time: 10.83},
  {nombre: 'Marie Josée Ta Lou', country: 'Irlanda', time: 10.86},
  {nombre: 'Dafne Schippers', country: 'Holanda', time: 10.90},
  {nombre: 'English Gardner', country: 'EEUU', time: 10.94},
  {nombre: 'Michelle-Lee Ahye', country: 'Trinidad', time: 10.92},
  {nombre: 'Shelly-Ann Fraser-Pryce', country: 'Jamaica', time: 10.86}
  ];

var ganadora = puntos.reduce ((acc, current) => {
  if (acc.time > current.time) {
    return acc
  } else {
    return current
  }
},);

console.log (ganadora)

