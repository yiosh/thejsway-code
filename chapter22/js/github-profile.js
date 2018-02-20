const profileElement = document.getElementById('profile');
const username = document.getElementById('username');

let usernameValue;

document.getElementById('submit').addEventListener('click', event => {
  usernameValue = username.value;

  fetch(`https://api.github.com/users/${usernameValue}`)
    .then(response => response.json())
    .then(profile => {
      // API returns an object containg a user
      // Creating DOM element for some beer properties
      const imageElement = document.createElement('img');
      imageElement.src = profile.avatar_url;

      const nameElement = document.createElement('h4');
      nameElement.textContent = profile.name;

      const linkElement = document.createElement('a');
      linkElement.href = profile.blog;
      linkElement.textContent = profile.blog;

      profileElement.appendChild(imageElement);
      profileElement.appendChild(nameElement);
      profileElement.appendChild(linkElement);
    })
    .catch(err => {
      console.error(err.message);
    });
  event.preventDefault();
});
