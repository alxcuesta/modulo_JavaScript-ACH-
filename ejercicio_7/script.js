//no olvidar el 'use strict'
'use strict';

//prueba random de funcionamiento
console.log ('hola cernícola')

// prueba de la teoria previa
const numero1 = 3;
const numero2 = 4;
const numero3 = 13;
const numero4 = 2;
const numero5 = 3;
const numero6 = -7;

function sumaNumeros (numero1, numero2){
    let resultado = numero1 + numero2;
    console.log ('resultado', resultado);
};
 sumaNumeros (numero1, numero2);
 sumaNumeros (numero3, numero4);
 sumaNumeros (numero5, numero6);


 //pruebas de la teoria previa
 const msj = 'Holllllllllllllllllllllla';
 const numeroLetras = msj.length;
 const mensaje = msj.concat ('Mundo');
 const msj2 = msj.toUpperCase();
 const msj3= msj.toLowerCase();
 const letra = msj.charAt (0);
 const mensaje2 = 'Hola planeta';
 const porcion = mensaje2.substring (2);
 const porcion2 = mensaje2.substring (1,8);

 console.log (numeroLetras);
 console.log (mensaje)
 console.log (msj2);
 console.log (msj3);
 console.log (letra);
 console.log (porcion);
 console.log (porcion2);


// pruebas de la teoria previa


var numero = prompt('Introduce un numero');
var resultado = parImpar(numero);


function parImpar(numero) {
  if(numero % 2 == 0) {
    return "par";
  } else {
    return "impar";
  }
}
console.log ("El número "+numero+" es "+resultado);
