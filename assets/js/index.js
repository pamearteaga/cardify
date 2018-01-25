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