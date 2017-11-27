const values = [3, 11, 7, 2, 9, 10];
let maximumValue = 0;

values.forEach(value => {
  if (value > maximumValue) {
    maximumValue = value;
  }
});

console.log(maximumValue);