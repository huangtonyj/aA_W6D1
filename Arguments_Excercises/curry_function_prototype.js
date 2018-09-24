Function.prototype.curry = function(numArgs) {
  
  let arg_arr = [];
  const fn = this;
  return function curryFn(arg) {
    arg_arr.push(arg);
    if (arg_arr.length < numArgs) {
      return curryFn;
    } else {
      return fn(...arg_arr);
    }
  };
  
};

function mySum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}

let a = mySum.curry(4);
console.log(a(1)(2)(3)(4));

