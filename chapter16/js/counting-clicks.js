let clicks = 0;
const counting = () => {
  clicks++;
  const clickCount = document.getElementById('clickCount');
  clickCount.textContent = '';
  clickCount.textContent = clicks;
};
document.getElementById('myButton').addEventListener('click', counting);

document.getElementById('deactivate').addEventListener('click', () => {
  document.getElementById('myButton').removeEventListener('click', counting);
});
