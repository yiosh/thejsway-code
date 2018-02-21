module.exports = class Account {
  constructor(owner) {
    this.onwer = owner;
    this.balance = 0;
  }
  credit(money) {
    this.balance += money;
  }
  describe() {
    return `owner: ${this.onwer}, balance: ${this.balance}`;
  }
};
