console.log('Ready');
const formElement = document.querySelector('form');

formElement.addEventListener('submit', e => {
  e.preventDefault(); // Cancel form data sending
  const password1 = e.target.elements.password1.value;
  const password2 = e.target.elements.password2.value;
  let validityMessage = '';
  const passRegex = /\d/;
  if (password1 !== password2) {
    validityMessage = 'Error: Both Passwords must be identical';
  }
  if (password1.length < 6) {
    validityMessage = 'Error: Password must be atleast 6 characters long';
  }
  if (!passRegex.test(password1)) {
    validityMessage = 'Error: Password must contain atleast one digit';
  }
  document.getElementById('passwordHelp').textContent = validityMessage;
});
