$(document).ready(function () {
  $("body").bootstrapMaterialDesign();
});


// Select all links with hashes
$('.scroll')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function (event) {
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
          scrollTop: target.offset().top - 120
        }, 1000, function () {
          window.location.hash = target;
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });


$(".scrolltotop").hide();
$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    $(".scrolltotop").fadeIn("slow");
  }
  else {
    $(".scrolltotop").fadeOut("fast");
  }
});


$(window).on('resize', function () {
  var win = $(this);
  if (win.width() < 768) {    
    $('.topbar').removeClass('fixed-top');
  }
  else {
    $('.topbar').addClass('fixed-top');
  }

  if (win.width() < 768) {    
    $('main').removeClass('main');
  }
  else {
    $('main').addClass('main');
  }

});