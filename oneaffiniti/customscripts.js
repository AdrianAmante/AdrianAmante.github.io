//temporary scripts for oneaffiniti website


// jQuery('#scrollMenu li a').click(
//   function(){ alert("It Works"); }
// );

// Select all links with hashes
jQuery('.scrollMenu a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = jQuery(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        jQuery('html, body').animate({
          scrollTop: target.offset().top-120
        }, 1000, function() {
        	window.location.hash = target;
          // Callback after animation
          // Must change focus!
          var $target = jQuery(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

  

jQuery(".toptop").hide();
jQuery(window).scroll(function() {
  if (jQuery(window).scrollTop() > 300) {
  jQuery(".toptop").fadeIn("slow");
  }
  else {
  jQuery(".toptop").fadeOut("fast");
  }
});

jQuery(window).scroll(function() {
  if (jQuery(window).scrollTop() > 300) {
  jQuery(".scrollNavscrollNav").addClass('scrollNavtotop');
  }
  else {
  jQuery(".scrollNav").removeClass('scrollNavtotop');
  }
});