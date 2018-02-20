fetch('https://raw.githubusercontent.com/bpesquet/thejsway/master/resources/languages.txt')
  .then(response => response.text()) // Access and return response's text content
  .then(text => {
    const languages = text.split(';');
    languages.forEach(language => {
      const newLi = document.createElement('li');
      newLi.innerText = language;
      const languageList = document.getElementById('languageList');
      languageList.appendChild(newLi);
    });
  });
