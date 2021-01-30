//no olvidar el 'use strict'
'use strict';

//prueba random de funcionamiento
console.log ('hola titola')

//ejercicio


const premiums = [
    {usuario: 'ppc90', age: 30, premium: false},
    {usuario: 'lu65', age: 24, premium: true},
    {usuario: 'maria3', age: 36, premium: false},
    {usuario: 'abc123', age: 30, premium: false},
    {usuario: 'sergio58', age: 30, premium: true},
    ];


    premiums.map(premiums => {
        if (premiums.premium) {
          console.log(`${premiums.usuario} tiene cuenta premium`)
        }
      });
      
      const raso = premiums.filter(user => !user.premium);
      console.log(raso);

