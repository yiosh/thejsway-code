// Say hello to the user
function sayHello(firstName, lastName) {
  const message = `Hello, ${firstName} ${lastName}!`;
  return message;
}
console.log(sayHello(prompt('What\'s your first name?'), prompt('What\'s your last name?')))
// TODO: ask user for first and last name
// TODO: call sayHello() and show its result