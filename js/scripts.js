function pizzaPrice() {
  var pizzaPrice=0;
  var sizeResponses = document.forms["pizza-size"];
  var includeSize = sizeResponses.elements[size-responses];

  if(pizza-size.checked==true){
    sizePrice=5;
  }
  return sizePrice;
  }

function toppingPrice() {
  var toppingPrice=0;
  var toppingResponses = document.forms["pizza-toppings"];
  var includeToppings = toppingResponses.elements[pizza-toppings];

  if(pizza-toppings.checked==true){
    toppingPrice=.5;
  }
  return toppingPrice;
}


function getTotal()
{
  //
    //Here we get the total price by calling our function
    //Each function returns a number so by calling them we add the values they return together
    var pizzaPrice = sizePrice() + toppingPrice();

    //display the result
    document.getElementById('totalPrice').innerHTML = "Total Price For Pizza $"+pizzaPrice;
}

$(document).ready(function(){
  $("form#pizza_order").submit(function(event){
    event.preventDefault();
    $("#size-responses").show();
    $("input:checkbox[name=pizza-size]:checked").each(function(){
      var pizzaSize = $(this).val();
      $('#size-responses').append(pizzaSize + "<br>");
    });
    $("#topping-responses").show();
    $("input:checkbox[name=pizza-toppings]:checked").each(function(){
      var pizzaToppings = $(this).val();
      $('#topping-responses').append(pizzaToppings + "<br>");
    });
    $('#pizza_order').show();
  });
});
