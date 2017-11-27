let i = Number(prompt('Enter a number between 2 and 9:'));

while(i < 2 || i > 9) {
  i = Number(prompt('Enter a number between 2 and 9, please:'));
  if (i >= 2 && i <= 9) {
    break;
  }
}
for(let y = 0; y <= 10; y++) {
    console.log(i * y);
  }