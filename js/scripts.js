//Business Logic

function Order(size, topping) {
  this.customSize = size;
  this.customTopping = topping;
  this.pizzaPrice = 0;
  this.toppingPrice = 0;
  this.totalPrice = 0;
}

Order.prototype.pizzaCost = function() {
  if(this.customSize === "Small") {
    return this.pizzaPrice += 5;
  } else if(this.customSize === "Medium") {
    return this.pizzaPrice += 7.50;
  } else if(this.customSize === "Large") {
    return this.pizzaPrice += 9;
  }
}

Order.prototype.PriceofToppings = function() {
  return this.toppingPrice = this.customTopping + .50;
}

Order.prototype.Total = function() {
  return this.totalPrice = this.pizzaPrice + this.toppingPrice;
}

//User Logic
$(document).ready(function(){
  $("form#pizza_order").submit(function(event){
    event.preventDefault();

    var pizzaSize = $("input:checkbox[name=pizza-size]:checked").val();
    var toppings = [];
    $("input:checkbox[name=pizza-toppings]:checked").each(function() {
      toppings.push(this.value);
    });


    $("#sizeResponses").show();
    $("input:checkbox[name=pizza-size]:checked").each(function(){
      var pizzaSize = $(this).val();
      $('#sizeResponses').append(pizzaSize + "<br>");
    });
    $("#toppingResponses").show();
    $("input:checkbox[name=pizza-toppings]:checked").each(function(){
      var pizzaToppings = $(this).val();
      $('#toppingResponses').append(pizzaToppings + "<br>");
    });

    var pizza = new Order(pizzaSize, toppings);
    Order.pizzaCost();
    Order.PriceofToppings();
    Order.Total();

    $("#totalPrice").text(pizza.totalPrice);

  });
});
