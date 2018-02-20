// Write a program that shows on the page a list of newspapers defined in a JavaScript array.
// Each link must be clickable.

// Newspaper list
const newspapers = ['https://www.nytimes.com', 'https://www.washingtonpost.com', 'http://www.economist.com'];

newspapers.forEach(link => {
  const divElement = document.createElement('div');
  const linkElement = document.createElement('a');
  linkElement.href = link;
  linkElement.innerHTML = link;
  divElement.appendChild(linkElement);
  document.querySelector('div').appendChild(divElement);
});
