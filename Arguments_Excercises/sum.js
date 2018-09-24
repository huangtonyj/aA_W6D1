function sum() {
  let result = 0;
  for (let i = 0; i < arguments.length; i++){
    result += arguments[i];
  }
  return result;
}

console.log(sum(1, 2, 3, 4) === 10);
console.log(sum(1, 2, 3, 4, 5) === 15);

function sum2(...args) {
  let result = 0;
  for (let i = 0; i < args.length; i++){
    result += args[i];
  }
  return result;
}

console.log(sum2(1, 2, 3, 4) === 10);
console.log(sum2(1, 2, 3, 4, 5) === 15);