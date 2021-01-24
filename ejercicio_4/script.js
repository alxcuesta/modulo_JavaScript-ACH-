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

/*
if (numero1 < numero2){
    alert ("El número1 no es mayor que el numero2");
};
*/

/*
if (numero1 < 0 || numero1 !=0){
    alert ("El número1 es negativo o distinto de cero");
};
*/


/*
if (++numero1 != numero2){
    alert ("Si incrementas en una unidad el valor de número1 no lo hace mayor o igual que número2");
};
*/

/*
if(++numero1 < numero2) {
    alert("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
  }
*/
