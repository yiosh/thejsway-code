// Improve the previous program so that it also shows the number of vowels inside the word.
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
