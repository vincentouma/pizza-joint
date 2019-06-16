/********toggle menu***** */
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
/**************slide landing page******** */

var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 2000);
}