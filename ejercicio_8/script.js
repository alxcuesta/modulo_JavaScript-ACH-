//no olvidar el 'use strict'
'use strict';

//prueba random de funcionamiento
console.log ('hola coca-cola')

//ejercicio

const texto = prompt ('Introduce tu texto aqui debajo');

 
function mayusONo(texto){
    var igual;
    if (texto === texto.toUpperCase()){
        igual = "Has escrito solo mayusculas";
}   else if (texto === texto.toLowerCase()){
        igual = "Has escrito solo minusculas";
}   else {
        igual = "Has escrito una mezcla de todo";
}
    return igual
}
alert (mayusONo(texto));