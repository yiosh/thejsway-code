// Complete the following program to compute and show the total sum of the values in each of the arrays.
const arrays = [[1, 4], [11], [3, 5, 7]];

// TODO: compute the value of the arraysSum variable
const flattened = arrays.reduce((acc, array) => acc.concat(array), []);
const arraysSum = flattened.reduce((acc, value) => acc + value, 0);

console.log(arraysSum); // Should show 31