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
    cost += 8;
  } else if (this.pieSize === "Large") {
    cost += 4;
  } else if (this.pieSize === "Medium") {
    cost += 2;
  } else {
    cost += 0;
  }
  this.pieToppings.forEach(function() {
    cost += 1.5;
  });

  this.cost = cost;
};

//User Interface Logic
$(document).ready(function() {
  $("form#order-form").submit(function(event) {
    event.preventDefault();

    var inputtedPieSize = $("select#pieSize").val();
    var newPizza = new Pizza(inputtedPieSize);

    $.each($("input[name='toppings']:checked"), function() {
      newPizza.pieToppings.push($(this).val());
    });

    $("ul#order-list").append("<li><button type='submit' class='btn btn-primary btn-margin'></li>");

    $(".pizzaOrder").click(funtion() {
      $("#orderSpecifications").show();
      $("#pieSize").text(newPizza.pieSize);
      $(".pieToppings").text(newPizza.pieToppings);
      $(".order-total").text(newPizza.cost());
    });
  });
});
});
