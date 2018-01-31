const $ = require('jquery');

$(document).ready(function() {
  // Llamando plug-in
  $('body').cardify({});
});

// plug-in de cardify

(function($) {
  $.fn.cardify = function() {
    return this.each(function() {
      $('img').mouseover(function() {
        const caption = $(this).attr('alt');
        $(this).css('opacity', '0.2');
        $(this).after('<figcaption>' + caption + '</figcaption>');
        $('figcaption').css({"width": "200px", "height": "auto", "color": "white", "font-family": "sans-serif", "font-size": "2em", "font-weight": "bold", "position": "absolute", "margin": "-10% 0 0 2%", "padding": "0", "display": "inline-block", "cursor": "pointer"});
        $(this).wrap('<figure></figure>');
        $('figure').css({"width": "auto", "height": "100%", "margin": "0", "padding": "0", "background": "linear-gradient(to bottom right, rgb(52,247,143), rgb(245,95,240))"});
      });
      $('img').mouseout(function() {
        $(this).css("opacity", "1");
        $(this).unwrap();
        $('figcaption').remove();
      });
    });
  };
})($);

// Definimos el modulo a exportar
//module.exports = cardify;







/*
// Función test DOM falso
// Importando jQuery
const $ = require("jquery");

const plugIn = {};
// Función de test
plugIn.imagen = function() {
};
plugIn.imagen();

module.exports = plugIn;
*/

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
