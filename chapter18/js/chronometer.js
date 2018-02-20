const counterElement = document.getElementById('counter');
const startElement = document.getElementById('start');
const stopElement = document.getElementById('stop');

const incrementCounter = () => {
  const counter = Number(counterElement.textContent);
  counterElement.textContent = counter + 1;
};

const intervalId = setInterval(incrementCounter, 1000);

startElement.addEventListener('click', () => {
  setInterval(intervalId, 1000);
});

stopElement.addEventListener('click', () => {
  clearInterval(intervalId);
});
