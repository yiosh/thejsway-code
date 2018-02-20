// TODO: complete program
function calculate(param1, param2, param3) {
  let result;

  switch (param2) {
    case ('/' && param1 === 0) || ('/' && param3 === 0):
      result = 'Infinity';
      break;
    case '+':
      result = param1 + param3;
      break;
    case '-':
      result = param1 - param3;
      break;
    case '*':
      result = param1 * param3;
      break;
    case '/':
      result = param1 / param3;
      break;
    default:
      result = 'Insert a valid operator';
  }
  return result;
}

console.log(calculate(4, '+', 6)); // Must show 10
console.log(calculate(4, '-', 6)); // Must show -2
console.log(calculate(2, '*', 0)); // Must show 0
console.log(calculate(12, '/', 0)); // Must show Infinity
