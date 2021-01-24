//no olvidar el 'use strict'
'use strict';

//prueba random de funcionamiento
console.log ('hola frutícola')

//ejercicio

var dni = prompt ("Introduce tu DNI sin letra. Recuerda que son 8 dígitos")
var letraDni = prompt ("Ahora, introduce unicamente la letra del DNI")
var dniMin = 10000000
var dniMax = 99999999
var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
var calculo = dni % 23
var letrasCalculo = letras[calculo]


if (dni > dniMax || dni < dniMin){
    alert ('Comprueba que has introducido unicamente los 8 digitos');
}
if (letraDni == letrasCalculo){
    alert ("Tu letra es correcta. Tu DNI y tu letra resultan: " + dni + "-" + letrasCalculo);
}   else {
        alert ("Tu letra es incorrecta. Deberia ser " + letrasCalculo + ". Vuelve a probar reciclando la página web.");
    }
