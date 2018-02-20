const wordList = [];
let i = 0;
wordList.push(prompt('Write a word to add to a list. Write "stop" to exit'));

while (wordList[i] !== 'stop') {
  wordList.push(prompt('Write a word to add to a list. Write "stop" to exit'));
  i++;
}

for (let y = 0; y < wordList.length - 1; y++) {
  console.log(wordList[y]);
}
