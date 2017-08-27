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

  
}
