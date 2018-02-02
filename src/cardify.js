const $ = require('jquery');
$(document).ready(function() {
  // Llamando plug-in
  $('body').cardify({});
});
// plug-in de cardify
(function($) {
  $.fn.cardify = function() {
    //retornar cada una de las funciones
    return this.each(function() {
      //evento mouseover
      $('img').mouseover(function() {
        // variable que guarda el atributo alt de la imagen para usar en el figcaption
        const caption = $(this).attr('alt');
        //se agrega opacidad a la imagen
        $(this).css('opacity', '0.2');
        //se agrega el figcaption junto con el atributo alt, después de la umagen
        $(this).after('<figcaption>' + caption + '</figcaption>');
        //se agrega estilo al figcaption
        $('figcaption').css({"width": "200px", "height": "auto", "color": "white", "font-family": "sans-serif", "font-size": "2em", "font-weight": "bold", "position": "absolute", "margin": "-10% 0 0 2%", "padding": "0", "display": "inline-block", "cursor": "pointer"});
        // se envuelve la imagen y el figcaption en la etiqueta figure
        $(this).wrap('<figure></figure>');
        //se agrega estilo al figure, degradado
        $('figure').css({"width": "auto", "height": "100%", "margin": "0", "padding": "0", "background": "linear-gradient(to bottom right, rgb(52,247,143), rgb(245,95,240))"});
      });
      //evento mouseout
      $('img').mouseout(function() {
        // se devuelve la opacidad original a la imagen
        $(this).css("opacity", "1");
        // se desenvuelve figure de la imagen
        $(this).unwrap();
        // se elimina el figcaption
        $('figcaption').remove();
      });
    });
  };
})($);

// Definimos el modulo a exportar
//module.exports = cardify;


