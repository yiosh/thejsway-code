// Modifying an HTML element: adding an <li>
document.getElementById('languages').innerHTML += '<li id="c">C</li>';

// Delete the HTML content of the list, replacing it with nothing
// document.getElementById("languages").innerHTML = "";

// Modify the title's text content
document.querySelector('h3').textContent += ' for programming';

// Define the id attribute of the first title
document.querySelector('h3').id = 'title';

const titleElement = document.querySelector('h3'); // Grab the first h3
titleElement.classList.remove('beginning'); // Remove the class "beginning"
titleElement.classList.add('title'); // Add a class called "title"
console.log(titleElement);

const pythonElement = document.createElement('li'); // Create an "li" element
pythonElement.id = 'python'; // Define element ID
pythonElement.textContent = 'Python'; // Define its text content
document.getElementById('languages').appendChild(pythonElement); // Insert the new element into the DOM

const rubyElement = document.createElement('li'); // Create an "li" element
rubyElement.id = 'ruby'; // Define element ID
rubyElement.appendChild(document.createTextNode('Ruby')); // Define its text content
document.getElementById('languages').appendChild(rubyElement); // Insert the new element into the DOM

const perlElement = document.createElement('li'); // Create an "li" element
perlElement.id = 'perl'; // Define element ID
perlElement.textContent = 'Perl'; // Define its text content
// Insert the new element before the "PHP" node
document.getElementById('languages').insertBefore(perlElement, document.getElementById('php'));

const linkElement = document.createElement('a');
linkElement.href = '#';
linkElement.target = '_blank';
linkElement.innerHTML = 'list';
const spanElement = document.createElement('span');
const textElement = document.createElement('p');
textElement.innerHTML = 'Here is a more complete ';
textElement.appendChild(spanElement);
spanElement.appendChild(linkElement);
textElement.innerHTML += ' of languages';
document.getElementById('content').appendChild(textElement);
