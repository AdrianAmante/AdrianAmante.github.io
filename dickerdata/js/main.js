jQuery(window).scroll(function() {
  if (jQuery(window).scrollTop() > 300) {
    jQuery("body").addClass("scrolled");
  } else {
    jQuery("body").removeClass("scrolled");
  }
});
