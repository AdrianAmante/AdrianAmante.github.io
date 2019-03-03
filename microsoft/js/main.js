$(document).ready(function() {
  $("body").bootstrapMaterialDesign();
});

//move navigation when scrolled down
$(window).scroll(function() {
  // if ($(window).scrollTop() > 550) {
  //   $(".interested")
  //     .addClass("fixed-top")
  //     .animate("slow");
  // } else {
  //   $(".interested")
  //     .removeClass("fixed-top")
  //     .animate("fast");
  // }

//   if ($(window).scrollTop() > 550) {
//     $(".interested-text p")
//       .addClass("f-size-adj")
//       .animate("slow");
//   } else {
//     $(".interested-text p")
//       .removeClass("f-size-adj")
//       .animate("fast");
//   }
  
  // if ($(window).scrollTop() > 550) {
  //   $(".interested-text h4")
  //     .addClass("f-title-adj")
  //     .animate("slow");
  // } else {
  //   $(".interested-text h4")
  //     .removeClass("f-title-adj")
  //     .animate("fast");
  // }
});


// Select all links with hashes
$('.scroll')
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
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top-120
        }, 1000, function() {
        window.location.hash = target;
          // Callback after animation
          // Must change focus!
          var $target = $(target);
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


$(".scrolltotop").hide();
$(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        $(".scrolltotop").fadeIn("slow");
    }
    else {
        $(".scrolltotop").fadeOut("fast");
    }
});