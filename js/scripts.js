//Business Logic

// Constructor
function Pizza(size) {
  this.pieSize = size;
  this.pieToppings = [];
};
// Prototype Order Total Cost
Pizza.prototype.cost = function() {
  var cost = 12;

  if(this.pieSize === "Ex-Large") {
    price += 8;
  } else if (this.pieSize === "Large") {
    price += 4;
  } else if (this.pieSize === "Medium") {
    price += 2;
  } else {
    price += 0;
  }
  this.pieToppings.forEach(function() {
    cost += 1.5;
  });

  this.price = price;
}

//User Interface Logic
$(document).ready(function() {
  $("form#order-form").submit(function(event) {
    event.preventDefault();

    var inputtedPieSize = $("select#pie-size").val();
    var newPizza = new Pizza(inputtedPieSize);

    $.each($("input[name='pietoppings']:checked"), function() {
      newPizza.pietoppings.push($(this).val());
    });

    $("ul#order-list").append("<li><button type='submit' class='btn btn-primary btn-margin'><span class='pizzaOrder'>" + newPizza.pizzasize + " Pizza Order" + "</button></span></li>");

    $(".pizzaOrder").last().click(funtion() {
      $("#orderSpecifications").show();
      $(".pieSize").text(newPizza.pieSize);
      $(".pieToppings").text(newPizza.pieToppings);
      $(".order-total").text(newPizza.cost());
    });
  });
});
});
