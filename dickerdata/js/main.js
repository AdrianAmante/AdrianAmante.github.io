jQuery(window).scroll(function() {
  if (jQuery(window).scrollTop() > 220) {
    jQuery("body").addClass("scrolled");
  } else {
    jQuery("body").removeClass("scrolled");
  }
});


jQuery('.modal').on('hide.bs.modal', function (e) {
    var $if = $(e.delegateTarget).find('iframe');
    var src = $if.attr("src");
    $if.attr("src", '/empty.html');
    $if.attr("src", src);
});