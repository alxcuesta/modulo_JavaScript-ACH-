//prueba random de funcionamiento
console.log ('hola random');

//PRIMERA PARTE 
// cálculo de volúmen
// al llevar el 'cm3' lo considera string
const volumen = 16 * 23 * 13;
console.log ('el volumen es:', volumen + ' cm3');

//cálculo área
const areaLateral = 23 * 13;
const areaBase = 16 * 23;
const area = areaLateral + 2*areaBase;
console.log ('el área es:', area + ' cm2')

//SEGUNDA PARTE
// generalizar datos
// declarar constantes
const base = 23;
const altura = 13;
const anchura = 16;
const volumenTotal = base * altura * anchura;
const areaTotal = base * altura + 2 * base * anchura

//cálculo area y volúmen
console.log ('el volumen por variables es:', volumenTotal + ' cm3')
console.log ('el área resulta por otro método:', areaTotal +' cm2' )

   