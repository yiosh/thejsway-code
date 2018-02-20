const r = Number(prompt('Enter the circle radius:'));

// TODO: create the circle object here
const circle = {
  circumference() {
    const d = r * 2;
    return Math.PI * d;
  },
  area() {
    return Math.PI * (r * r);
  },
};
console.log(`Its circumference is ${circle.circumference()}`);
console.log(`Its area is ${circle.area()}`);
