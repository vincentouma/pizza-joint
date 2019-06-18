const extraTomato = {
  name: "extratomato",
  price: 100
};
const onions = {
  name: "onions",
  price: 50
};
const ovacadoSpecial = {
  name: "ovacado special",
  price: 100
};
const bellPepper = {
  name: "Bell Pepper",
  price: 50
};
const sausage = {
  name: "sausage",
  price: 50
};
const chicken = {
  name: "Chicken",
  price: 150
};
const extraCheese = {
  name: "extraCheese",
  price: 50
};
const mexican = {
  name: "mexican",
  price: 50
};
const mushrooms = {
  name: "Mushrooms",
  price: 100
};
const toppingsList = {
  name: "Toppings",
  items: [sausage, bellPepper, extraCheese, mexican, ovacadoSpecial, mushrooms, onions, extraTomato, chicken]
}


const large = {
  name: "Large Size",
  price: 550
};
const medium = {
  name: "Medium Size",
  price: 400
};
const small = {
  name: "Small Size",
  price: 200
};
const sizeList = {
  name: "Sizes",
  items: [large, medium, small]
};


const thin = {
  name: "Thin Crust",
  price: 70
};
const thick = {
  name: "Thick Crust",
  price: 100
};
const deep = {
  name: "Deep Crust",
  price: 100
};
const cheese = {
  name: "Cheese Crust",
  price: 150
};
const stuffed = {
  name: "Stuffed Crust",
  price: 250
};
const crustsList = {
  name: "Crusts",
  items: [thin, thick, deep, cheese, stuffed]
};

$(document).ready(function() {
  var total = 0
  $(".delivery").hide();
  $("#checkouts").hide();

  $("#size").submit(function(event) {
    event.preventDefault()
    var size = parseInt($("input[name='size']:checked").val());
    var sizeName = sizeList.items[size].name
    $("#checkouts").append("<li>" + sizeList.items[size].name + " " + sizeList.items[size].price + "</li>")
    total += (sizeList.items[size].price)
    alert("The total so far is: " + total)
  })


  $("#toppings").submit(function(event) {
    event.preventDefault()

    $('input[name=toppings]:checked').each(function() {
      var toppings = parseInt($(this).val())
      $("#checkouts").append("<li>" + toppingsList.items[toppings].name + " " + toppingsList.items[toppings].price + "</li>")
      total += (toppingsList.items[toppings].price)

    });
    alert("Your current total is: " + total)
  });


  $("#number").submit(function(event) {
    event.preventDefault()
    var quantity = $("#quantity").val()
    $("#checkouts").append("<li>" + "Quantity: " + quantity + "</li>")
    total *= quantity
    alert("Your current total is " + total)
  });


  $("#crust").submit(function(event) {
    event.preventDefault()
    var crust = parseInt($("input[name='crust']:checked").val());
    $("#checkouts").append("<li>" + crustsList.items[crust].name + " " + crustsList.items[crust].price + "</li>")
    total += (crustsList.items[crust].price)
    alert("The total so far is: " + total)
  });

  $("#delivery").click(function(event) {
    event.preventDefault()
    var delivery = 180
    $(".delivery").show()
    $("#checkouts").append("<li>" + "Delivery : 180" + "</li>")
    total += delivery
    alert("The total so far is:" + total)
  });
  $(".delivery").submit(function(event) {
    event.preventDefault()
    alert("We will deliver your pizza to " + $("#name").val() + " " + $("#building").val() + " " + "House Number: " + $("#houseNumber").val())
    $(".delivery").hide();
  });

  $("#pickup").click(function(event) {
    event.preventDefault()
    $("#checkouts").append("<li>" + "Pick up: 0" + "</li>")
    var pickup = 0
    total += pickup
  });

  $("#check-out-button").click(function() {
    $("#checkouts").append("<li>" + "Your total is: " + total + "</li>")
    $("#checkouts").show();

  })

});
