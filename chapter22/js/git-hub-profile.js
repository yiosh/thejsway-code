// Grab a new beer when clicking the button
document.getElementById("get-user-form").addEventListener("submit", e => {
  const username = e.target.elements.username.value;
  // Fetching random beer data from API
  fetch(`https://api.github.com/users/${username}`)
  .then(response => response.json())
  .then(user => {
    // Creating DOM element for some user properties
    const avatarElement = document.createElement("img");
    avatarElement.src = user.avatar_url;
    const fullNameElement = document.createElement("h2");
    fullNameElement.textContent = user.name;
    const blogElement = document.createElement("a");
    blogElement.href = user.blog;
    blogElement.textContent = user.blog
    // Clear previous beer data
    const userInfoElement = document.getElementById("user-info");
    userInfoElement.innerHTML = "";
    // Add beer info to the page
    userInfoElement.appendChild(avatarElement);
    userInfoElement.appendChild(fullNameElement);
    userInfoElement.appendChild(blogElement);
  })
  .catch(err => {
    console.error(err.message);
  });
  e.preventDefault();
});