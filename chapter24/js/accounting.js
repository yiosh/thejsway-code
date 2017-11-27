// Export a User class
module.exports = class Account {
  constructor(firstName) {
    this.firstName = firstName;
    // Create user login by combining first letter of first name + last name
    this.balance = 0;
  }
  credit(value) {
    this.balance += value;
  }
  describe() {
    return `owner: ${this.firstName}, balance: ${this.balance}`;
  }
};