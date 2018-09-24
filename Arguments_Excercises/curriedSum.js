function curriedSum(numArgs) {
  const numbers = [];
  return function addSum (num) {
    numbers.push(num);
    if (numbers.length === numArgs) {
      return numbers.reduce((a, b) => a + b, 0);
    } else {
      return addSum;
    }};
}

const sum = curriedSum(4);
console.log(sum(5)(30)(20)(1)); // => 56