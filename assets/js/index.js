const $ = require("jquery");

$(document).ready(function() {
  $('body').cardify({});
});

(function($) {
  $.fn.cardify = function() {
    return this.each(function() {
      $('img').mouseover(function() {
        const caption = $(this).attr('alt');
        $(this).css("opacity", "0.2");
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
})(jQuery);