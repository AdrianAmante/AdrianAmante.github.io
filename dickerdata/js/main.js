jQuery(window).scroll(function() {
  if (jQuery(window).scrollTop() > 220) {
    jQuery("body").addClass("scrolled");
  } else {
    jQuery("body").removeClass("scrolled");
  }
});

jQuery(function () {

  jQuery('.resizeFrame').load(function () {
    var iframeContentWindow = this.contentWindow;
    var height = iframeContentWindow.jQuery(document).height();
    this.style.height = height + 'px';
  });
});