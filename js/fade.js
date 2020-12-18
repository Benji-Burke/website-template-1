(function() {

   var quotes = $(".quotes");
   var quoteIndex = -1;
   
   function showNextQuote() {
     ++quoteIndex;
     quotes.eq(quoteIndex % quotes.length)
       .fadeIn(1500)
       .delay(3000)
       .fadeOut(1500, showNextQuote);
   }
   
   showNextQuote();
   
})();
   
//https://codepen.io/Muhammad_Adil93/pen/xOBzwy