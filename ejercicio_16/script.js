//no olvidar el 'use strict'
'use strict';

//prueba random de funcionamiento
console.log ('hola bon dia')

//ejercicio

class cuadrado {
  constructor(lado){
      this.perimetro = lado * 4;
      this.area = lado * lado; 

      console.log ("Este cuadrado tiene " + lado + " cm de lado y su perímetro es "  + this.perimetro + " cm y su área es de " + this.area + " cm3")
  }
};

const pequeño  = new cuadrado (2);
const mediano = new cuadrado (5);
const grande = new cuadrado (10);

