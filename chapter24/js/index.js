// const circle = require('./circle.js');

// console.log(`The circumference of a circle of radius 3 is ${circle.circumference(3)}`);

// console.log(`Its area is ${circle.area(3)}`);

// Import accounting
const Account = require('./accounting.js');

// Create object from the exported class
const myAccount = new Account('Jeff');
myAccount.credit(150);
console.log(myAccount.describe());
