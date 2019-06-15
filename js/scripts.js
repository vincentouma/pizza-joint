$(document).ready(function () {
    $(".img3").click(function () {
      $(".img3").hide(function () {
        $(".psg1", ).show(function () {
          $(".header").css('font-weight', 'bold');
        });
      });
    });
    $(".psg1").click(function () {
        $(".psg1").toggle(function () {
          $(".img3").show(function () {
            $(".header").css('font-weight', 'normal');
          });
        });
      });
  
    
});