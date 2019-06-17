/********toggle menu***** */
$(document).ready(function () {
    var size;
    var flavor;
    var crust;
    var quantity;
    var totalPrice
    var orderStreet

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

    $("#pizza1").submit(function (event) {
        event.preventDefault();
        size = parseInt(document.getElementById("size").value);
        flavor = parseInt(document.getElementById("flavor").value);
        crust = parseInt(document.getElementById("crust").value);

        quantity = parseInt(document.getElementById("quantity").value);

        var smallPrices = [500, 550, 500];
        var standardPrices = [700, 800, 650];
        var largePrice = [900, 1000, 800];

        var price = 0

        if (size === 1) {
            price = smallPrices[flavor - 1]
        } else if (size === 2) {
            price = standardPrices[flavor - 1]
        } else {
            price = largePrice[flavor - 1]
        }

        var inputElements = document.getElementsByClassName('topping');
        for (var i = 0; inputElements[i]; ++i) {
            if (inputElements[i].checked) {
                price += 100
            }
        }
        
        event.preventDefault();{
        alert("price of one pizza " + price);
        totalPrice = price * quantity
        alert("total price of all pizza " +totalPrice);
        }

        $('#goToDelivery').click(function () {
            event.preventDefault();
            $('.delivery').show();
        });



    });
    $('#goToDelivery').click(function (event) {
        event.preventDefault();
        $(".delivery").toggle();
        $(".totalBox").toggle();
        //$(".goodbye").slideToggle();
        var orderName = $("input#name").val();


        $("#nameHere").text(orderName);

    });
    $('#deliverySubmit').click(function (event) {
        event.preventDefault();
        orderStreet = $("input#street").val();
        document.getElementById("finalTotalHere").innerHTML = totalPrice;
        document.getElementById("hom").innerHTML = orderStreet;


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
    setTimeout(showSlides, 3000);
}