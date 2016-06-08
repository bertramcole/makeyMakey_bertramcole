$(document).ready(function() {
    $.preloadImages = function() {
        for (var i = 0; i < arguments.length; i++) {
            $("<img />").attr("src", arguments[i]);
        }
    }

    $.preloadImages("https://www.usmint.gov/images/mint_programs/circulatingCoins/Penny-obverse.png", "https://www.usmint.gov/images/mint_programs/circulatingCoins/Penny-reverse.png");
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
                    $(".image").html('<img class="heads" src="https://www.usmint.gov/images/mint_programs/circulatingCoins/Penny-obverse.png"/>');
                    $('.heads').addClass('animated flip');
                } else {
                    $("#regTitle").html("You Got " + side);
                    $('h1').addClass('animated pulse');
                    $(".image").html('<img class="tails" src="https://www.usmint.gov/images/mint_programs/circulatingCoins/Penny-reverse.png"/>');
                    $('.tails').addClass('animated flip');
                }
            }
      
      
    // Stuff During Event
   console.log(e.keyCode);
 
    
  
  
  // Stuff After Event
  
});
    
    
});