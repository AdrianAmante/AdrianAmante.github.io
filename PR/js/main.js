$(document).ready(function() {
  $("body").bootstrapMaterialDesign();
});

$(window).on('resize', function () {
  var win = $(this);
  if (win.width() < 1200) {
    $('.bmd-layout-container.bmd-drawer-f-l').removeClass('bmd-drawer-in');
    $('.bmd-layout-container.bmd-drawer-f-l').addClass('bmd-drawer-overlay');
    $('.bmd-layout-backdrop').removeClass('in');
  }
  else {
    $('.bmd-layout-container.bmd-drawer-f-l').addClass('bmd-drawer-in');
    $('.bmd-layout-container.bmd-drawer-f-l').removeClass('bmd-drawer-overlay');
    $('.bmd-layout-backdrop').removeClass('in');
  }
});