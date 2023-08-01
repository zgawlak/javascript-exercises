const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(array) {
  return array.reduce((accumulator, currentValue) =>
  accumulator + currentValue, 0)
};

const multiply = function(array) {
  return array.reduce((product, currentValue) =>
  product *= currentValue, 1)
};

const power = function(a, b) {
  return a ** b;
};

const factorial = function(a) {
  if (a === 0) {
    return 1;
  }
  else {
    let product = 1;
    for (a; a > 0; a--) {
      product *= a;
    }
    return product;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
