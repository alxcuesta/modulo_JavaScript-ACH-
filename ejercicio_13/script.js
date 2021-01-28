//no olvidar el 'use strict'
'use strict';

//prueba random de funcionamiento
console.log ('hola estintola')

//ejercicio

const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]
const mesLargo = meses
    .filter (mes => mes.length >7)
    .map (cadames => cadames.toUpperCase());   

    console.log (meses)
console.log ("Los meses más largos, en mayúscula son " + mesLargo);












