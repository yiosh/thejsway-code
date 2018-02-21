document.querySelector('form').addEventListener('submit', event => {
  event.preventDefault();
  const formData = new FormData(event.target);
  fetch('https://thejsway-server.herokuapp.com/articles', {
    method: 'POST',
    body: formData,
  })
    .then(response => response.text())
    .then(result => {
      document.getElementById('root').textContent = result;
    })
    .catch(err => {
      console.error(err.message);
    });
});
