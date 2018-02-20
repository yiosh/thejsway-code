// TODO: create the dog object here
const dog = {
  name: 'Snoopy',
  species: 'Labrador',
  size: '50cm',
  bark() {
    return 'WOOF WOOF!';
  },
};

console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`);
console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);
