//no olvidar el 'use strict'
'use strict';

//prueba random de funcionamiento
console.log ('hola díscola')

//prueba de los ejemplos teóricos previos a la ejercicio propuesto

//for
const dias1 = ['Lunes', 'Martes', 'Miercoles', 'Jueves','Viernes', 'Sábado', 'Domingo'];
for (let i = 0; i < 7; i++){
    console.log (dias1[i]);
}

// for...of
const dias2 = ['Lunes', 'Martes', 'Miercoles', 'Jueves','Viernes', 'Sábado', 'Domingo'];
for (const day of dias2){
    console.log(dias2)
}

//for...in
const dias3 = ['Lunes', 'Martes', 'Miercoles', 'Jueves','Viernes', 'Sábado', 'Domingo'];
for (const day in dias3){
    console.log(dias3)
}

// ejercicio 1.4 (para que funcione, des-comentar uno a uno)


var numero1 = 5; //usar 'var' y no const, sinó el incremento ++ no cambia el numero
var numero2 = 8;
