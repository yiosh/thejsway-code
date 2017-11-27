const textColor = prompt("What text color would you like?");
const backgroundColor = prompt("What background color would you like?");

const divs = document.querySelectorAll("div");

divs.forEach(div => {
  div.style.color = textColor;
  div.style.backgroundColor = backgroundColor;
})