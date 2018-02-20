// Complete the following program to compute and show the names of political forms ending with "cy".
const governmentForms = [
  {
    name: 'Plutocracy',
    definition: 'Rule by the wealthy',
  },
  {
    name: 'Oligarchy',
    definition: 'Rule by a small number of people',
  },
  {
    name: 'Kleptocracy',
    definition: 'Rule by the thieves',
  },
  {
    name: 'Theocracy',
    definition: 'Rule by a religious elite',
  },
  {
    name: 'Democracy',
    definition: 'Rule by the people',
  },
  {
    name: 'Autocracy',
    definition: 'Rule by a single person',
  },
];

// TODO: compute the formsEndingWithCy array
const formsEndingWithCy = forms => forms.filter(form => form.name.endsWith('cy')).map(form => form.name);
// Should show ["Plutocracy", "Kleptocracy", "Theocracy", "Democracy", "Autocracy"]
console.log(formsEndingWithCy(governmentForms));
