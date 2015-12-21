//Use the onload event so that we can make sure the DOM is at
//least mostly loaded before trying to get elements
window.onload = function() {
   //Get the DOM element that represents the <button> element.
   //And set the onclick event
   document.getElementById("address").onclick = function(){
      //Set a variable to contain the DOM element of the overly
      var overlay = document.getElementById("overlay");
      //Set a variable to contain the DOM element of the popup
      var popup = document.getElementById("popup");

      //Changing the display css style from none to block will make it visible
      overlay.style.display = "block";
      //Same goes for the popup
      popup.style.display = "block";
   };

   document.getElementById("popup").addEventListener("click", function(){
      var popup = document.getElementById("popup");
      popup.style.display = "none";
      var overlay = document.getElementById("overlay");
      overlay.style.display = "none";
   }, true);
}

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
