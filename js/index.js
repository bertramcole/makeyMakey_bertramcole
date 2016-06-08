$(document).ready(function() {
    $.preloadImages = function() {
        for (var i = 0; i < arguments.length; i++) {
            $("<img />").attr("src", arguments[i]);
        }
    }

    $.preloadImages("https://pixabay.com/get/e831b90d2afc1c22d2524518a34e449fe272ebdd04b0154790f4c378a2edb2/bronze-148228_1280.png", "https://pixabay.com/get/e831b90d2bf41c22d2524518a34e449fe272ebdd04b0154790f4c378a3ebb7/franc-148230_1280.png");
    $('h1').addClass('animated fadeInDown');
    $('img').addClass('animated fadeInDown');
    
    
    
    $('html').keypress( function(e){
  
  if (e.keyCode === 32) {
      
      $(".coin").hide(0);
      $("#pro").hide(0);
      
                var flip = ["heads", "tails"];
                var side = flip[Math.floor(Math.random() * flip.length)];

                if (side == "heads") {
                    $("#regTitle").html("You Got " + side).addClass('animated pulse');
                    $('h1').addClass('animated pulse');
                    $(".image").html('<img class="heads" src="https://pixabay.com/get/e831b90d2afc1c22d2524518a34e449fe272ebdd04b0154790f4c378a2edb2/bronze-148228_1280.png"/>');
                    $('.heads').addClass('animated flip');
                } else {
                    $("#regTitle").html("You Got " + side);
                    $('h1').addClass('animated pulse');
                    $(".image").html('<img class="tails" src="https://pixabay.com/get/e831b90d2bf41c22d2524518a34e449fe272ebdd04b0154790f4c378a3ebb7/franc-148230_1280.png"/>');
                    $('.tails').addClass('animated flip');
                }
            }
      
      
    // Stuff During Event
   console.log(e.keyCode);
 
    
  
  
  // Stuff After Event
  
});
    
    
});