const number1 = Number(prompt('Choose a number:'));
const number2 = Number(prompt('And another:'));

if (number1 > number2) {
  alert('First number is greater than second');
} else if (number1 < number2) {
  alert('First number is lesser than second');
} else if (number1 === number2) {
  alert('First number is equal like second');
} else {
  alert('No number inserted');
}