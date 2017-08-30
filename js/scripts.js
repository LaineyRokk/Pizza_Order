//Business Logic

function Pizza(size) {
  this.piesize = size;
  this.pietoppings = [];
};

Pizza.prototype.price = function() {
  var price = 12;

  if(this.piesize === "ex-large") {
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
  }

  this.price = price;
});

//User Interface Logic
$(document).ready(function() {
  $("form#order-form").submit(function(event) {
    event.preventDefault();

    var inputtedPieSize = $("select#pie-size").val();
    var newPizza = new Pizza(inputtedPieSize);

    $.each($("input[name='pietoppings']:checked"), function() {
      newPizza.pietoppings.push($(this).val());
    });

    $("ul#order-list").append("<li><button type='submit' class='btn btn-primary btn-margin'>" + newPizza.piesize + "Pizza Order" + "</button></li>");

    $(".pizzaOrder").last().click(funtion() {
      $("#order-specifications").show();
      $(".pie-size").text(newPizza.piesize);
      $(".pie-toppings").text(newPizza.pietoppings);
      $(".order-total").text(newPizza.price());
    });
  });
});
