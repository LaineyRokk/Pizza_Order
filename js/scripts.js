//Business Logic

//Object(pizza) Constructor
function Pizza(size) {
  this.piesize = size;
  this.pietoppings = [];
};

//Object(pizza) Prototype Method
Pizza.prototype.price = function() {
  var price = 12;

  if(this.piesize === "gargantuan") {
    price += 8;
  } else if (this.piesize === "large") {
    price += 4;
  } else if (this.piesize === "medium") {
    price += 2;
  } else {
    price += 0;
  }
  this.pieToppings.forEach(function() {
    price += 1.5;
  });
  this.price = price;
}

//User Interface Logic
$(document).ready(function() {
  $("form#order-form").submit(function(event) {
    event.preventDefault();

    var inputtedPieSize = $("input.piesize").val();
    var newPizza = new Pizza(inputtedPieSize);

    $.each($("input[name='pietoppings']:checked"), function() {
      newPizza.pietoppings.push($(this).val());
    });

    $("ul#order-list")append("<li><button type='submit' class='btn btn-primary btn-margin'>" + newPizza.piesize + "Pizza Order" + "</button></li>");

    $(".pizzaOrder").last().click(funtion() {
      $("#order-specs").show();
      $(".pie-size").text(newPizza.piesize);
      $(".pie-toppings").text(newPizza.pietoppings);
      $(".order-total").text(newPizza.price());
    });
  });
});
