fetch(
  "https://raw.githubusercontent.com/bpesquet/thejsway/master/resources/languages.txt"
)
  .then(response => response.text())
  .then(languages => {
    const languagesArray = languages.split(";");
    languagesArray.forEach(language => {
      const languageListElement = document.createElement("li");
      languageListElement.textContent = language;
      document.getElementById("languageList").appendChild(languageListElement);
    })
  })
  .catch(err => {
    console.error(err.message);
  });