/* Write a program that shows on the page a list of terms and definitions defined in a JavaScript array. */
/* Use the HTML <dl> tag to create the list (more on this tag).
Each term of the dictionary should be given more importance with a <strong> tag. */
const words = [{
  term: "Procrastination",
  definition: "Avoidance of doing a task that needs to be accomplished"
}, {
  term: "Tautology",
  definition: "logical argument constructed in such a way that it is logically irrefutable"
}, {
  term: "Oxymoron",
  definition: "figure of speech that juxtaposes elements that appear to be contradictory"
}];
const list = document.createElement("dl");

words.forEach((listItem) => {
  const term = document.createElement("dt");
  const definition = document.createElement("dd");
  term.innerHTML = listItem.term;
  definition.innerHTML = listItem.definition;
  list.appendChild(term);
  list.appendChild(definition);
  document.getElementById("content").appendChild(list);
});
