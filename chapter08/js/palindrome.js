/* Improve the previous program to check if the word is a palindrome.
A palindrome is a word or sentence that's spelled the same way both forward and backward,
ignoring punctuation, case, and spacing. */
const word = prompt('Write a word');

console.log(word.length);
console.log(word.toLowerCase());
console.log(word.toUpperCase());
let vowelCount = 0;
word.forEach(letter => {
  const lower = letter.toLowerCase();
  if (lower === 'a' || lower === 'e' || lower === 'i' || lower === 'o' || lower === 'u') {
    vowelCount++;
  }
});

console.log(vowelCount);
const splitReverse = word
  .split('')
  .reverse()
  .join('');

console.log(splitReverse);

if (word.toLowerCase() === splitReverse.toLowerCase()) {
  console.log('The word you entered is a Palindrome');
} else {
  console.log('The word you entered is not a Palindrome');
}
