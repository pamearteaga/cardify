window.onload = function() {

  console.log("listo");
  
  $("img").wrap("<figure></figure>");
  //$('body').cardify({});

  $("img").mouseover(function(){
    var caption = $(this).attr("alt");
    $(this).css("opacity", "0.3");
    $(this).before('<figcaption>' + caption + '</figcaption>');
    $("figcaption").css({"font-family": "sans-serif", "font-size": "2em", "font-weight": "bold", "position": "relative", "top": "1em", "left": "1em"});
  })

  $("img").mouseout(function(){
    $(this).css("opacity", "1");
    $("figcaption").remove();
  });


};//onload

function cardify() {


};





/*
// test
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
}*/