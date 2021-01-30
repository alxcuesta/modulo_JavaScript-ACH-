//no olvidar el 'use strict'
'use strict';

//prueba random de funcionamiento
console.log ('hola penultimo ejercicio')

//ejercicio

// Al hacer click sobre el botón de Guardar salta un alert
document.querySelector(".guardamelo").addEventListener("click", guardameEldato);
function guardameEldato() {
  alert('Se guardarán tus datos');
};

// Al quitar el foco del input cambia de color
const inputName = document.querySelector(".name");

function cambiaColorFoco() {
  inputName.style.backgroundColor = '#fff666';
};
function cambiaColorNoFoco() {
  inputName.style.backgroundColor = '#9999FF';
};

// Si la letra que pulsemos es vocal lo pintaremos de rojo y de verde si es consonante
const letraRandom = document.querySelector('.random');
function checkLetter(event){
  const currentLetter = event.which;
  if (currentLetter === 97 || currentLetter === 101 || currentLetter === 105 || currentLetter === 111 || currentLetter === 117) {
    letraRandom.style.color = '#a8323e';
  } else {
    letraRandom.style.color = '#32a836';
  }
};