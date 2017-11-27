// Improve the previous program so that it shows the word written backwards.
const word = prompt("Write a word");

console.log(word.length);
console.log(word.toLowerCase());
console.log(word.toUpperCase());
let vowelCount = 0;
for (const letter of word) {
  const lower = letter.toLowerCase();
  if (lower === "a" || lower === "e" || lower === "i" || lower === "o" || lower === "u") {
    vowelCount++;
  }
}
console.log(vowelCount);
const splitReverse = word.split("").reverse().join("");

console.log(splitReverse);