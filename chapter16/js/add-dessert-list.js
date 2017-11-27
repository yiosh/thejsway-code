document.getElementById("addButton").addEventListener("click", () => {
  const dessert = document.createElement("li");
  dessert.textContent = prompt("What dessert do you wish to add?");
  document.getElementById("desserts").appendChild(dessert);
});