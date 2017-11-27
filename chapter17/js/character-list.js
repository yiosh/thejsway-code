// Character list. Each house has a name and a code
const houses = [
  {
    code: "ST",
    name: "Stark"
  },
  {
    code: "LA",
    name: "Lannister"
  },
  {
    code: "BA",
    name: "Baratheon"
  },
  {
    code: "TA",
    name: "Targaryen"
  }
];

// Return an array of characters belonging to a house
const getCharacters = houseCode => {
  switch (houseCode) {
    case "ST":
      return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
    case "LA":
      return ["Tywin", "Cersei", "Jaime", "Tyrion"];
    case "BA":
      return ["Robert", "Stannis", "Renly"];
    case "TA":
      return ["Aerys", "Daenerys", "Viserys"];
    default:
      return []; // Empty array
  }
};

houses.forEach(house => {
  const optionElement = document.createElement("option");
  optionElement.value = house.code;
  optionElement.textContent = house.name;
  document.getElementById("house").appendChild(optionElement);
});

document.getElementById("house").addEventListener("change", e => {
  document.getElementById("characters").innerHTML = "";
  const house = e.target.value;
  getCharacters(house).forEach(char => {
    const liElement = document.createElement("li");
    liElement.textContent = char;
    document.getElementById("characters").appendChild(liElement);
  });
});