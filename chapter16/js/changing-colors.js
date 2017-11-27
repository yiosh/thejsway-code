const allDivs = document.querySelectorAll("div");

document.addEventListener("keypress", e => {
  switch (e.key) {
    case 'r':
    allDivs.forEach(div => {
    div.style.backgroundColor = 'red';
    });
    break;
    case 'y':
    allDivs.forEach(div => {
    div.style.backgroundColor = 'yellow';
    });
    break;
    case 'g':
    allDivs.forEach(div => {
    div.style.backgroundColor = 'green';
    });
    break;
    case 'b':
    allDivs.forEach(div => {
    div.style.backgroundColor = 'blue';
    });
    break;
  }
});