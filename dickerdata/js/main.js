jQuery(window).scroll(function() {
  if (jQuery(window).scrollTop() > 220) {
    jQuery("body").addClass("scrolled");
  } else {
    jQuery("body").removeClass("scrolled");
  }
});