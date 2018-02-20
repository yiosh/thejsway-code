fetch(
  "https://raw.githubusercontent.com/bpesquet/thejsway/master/resources/languages.txt"
)
  .then(response => response.text()) // Access and return response's text content
  .then(text => {
    var languages = text.split(';');
    languages.forEach(language => {
      let newLi = document.createElement('li');
      newLi.innerText = language;
      let languageList = document.getElementById('languageList');
      languageList.appendChild(newLi);
    });
  });