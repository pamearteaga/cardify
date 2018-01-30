// Función test DOM falso
// Importando jQuery
const $ = require("jquery");

const plugIn = {};
// Función de test
plugIn.imagen = function() {
};
plugIn.imagen();

module.exports = plugIn;


/*
// test prueba
objCalculator = {
  addNumber: function(a, b){
    return a + b;
  },
  substractNumber: function(a, b){
    return a - b;
  },
  multiplyNumber: function(a, b){
    return a * b;
  },
  divideNumber: function(a, b){
    return a / b;
  }
}
// Estamos validando si nos encontramos en un ambiente de node
// El "module" solo existe en node asi que para constatar que estamos en un ambiente node verificamos que la variable no sea indefinida.
// Si estamos en un ambiente Node importamos el código para poder usarlo en nuestras pruebas
if ( typeof module != 'undefined' && module.exports ) {
  module.exports = objCalculator;
}
*/
