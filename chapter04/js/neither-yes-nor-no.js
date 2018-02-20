let userInput = prompt('White something, to end this loop write "yes" or "no":');

while (userInput !== 'yes' || userInput !== 'no') {
  console.log(userInput);
  userInput = prompt('White something, to end this loop write "yes" or "no":');
  if (userInput === 'yes' || userInput === 'no') {
    break;
  }
}
