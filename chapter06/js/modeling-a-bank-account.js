const account = {
  name: 'Alex',
  balance: 0,
  credit(value) {
    const result = this.balance += value;
    return result;
  },
  describe() {
    return `owner: ${this.name}, balance ${this.balance}`;
  }
};
console.log(account.describe());
account.credit(170);
console.log(account.describe());