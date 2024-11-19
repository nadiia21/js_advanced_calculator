'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  let result = 0;

  return {
    add(numb) {
      result += numb;
    },

    subtract(numb) {
      result -= numb;
    },

    multiply(numb) {
      result *= numb;
    },

    divide(numb) {
      result /= numb;
    },

    reset() {
      result = 0;

      return this;
    },

    operate(operation, number) {
      operation(number);

      return this;
    },

    get result() {
      return result;
    },
  };
}

module.exports = makeCalculator;
