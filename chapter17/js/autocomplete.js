// Country list
const countryList = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antarctica",
  "Antigua-and-Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Autria",
  "Azerbaïjan"
];

const countryElement = document.getElementById("country");
countryElement.addEventListener("input", e => {
  const val = e.target.value;
  document.getElementById("suggestions").innerHTML = "";
  countryList.forEach(country => {
    if (RegExp(val).test(country)) {
      const paragraphElement = document.createElement("p");
      paragraphElement.textContent = country;
      paragraphElement.classList.add("suggestion");
      document.getElementById("suggestions").appendChild(paragraphElement);
    }
  });
  if (val.length === 0) {
    document.getElementById("suggestions").innerHTML = "";
  }
});

countryElement.addEventListener("blur", () => {
  document.getElementById("suggestions").textContent = "";
});