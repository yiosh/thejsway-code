// List of questions (statement + answer)
const questions = [
  {
    statement: "2+2?",
    answer: "2+2 = 4"
  },
  {
    statement: "In which year did Christopher Columbus discover America?",
    answer: "1492"
  },
  {
    statement:
      "What occurs twice in a lifetime, but once in every year, twice in a week but never in a day?",
    answer: "The E letter"
  }
];

const content = document.getElementById("content");

questions.forEach((q, index )=> {
  const questionDiv = document.createElement("div");
  questionDiv.id = `qDiv${index}`;
  const questionP = document.createElement("p");
  questionP.textContent = questions[index].statement;
  questionP.insertAdjacentHTML("afterBegin", `<span><strong>Question ${index + 1}: </strong></span>`);
  const showAnswerButton = document.createElement("button");
  showAnswerButton.textContent = "Show Answer";
  showAnswerButton.id = `button${index}`;
  const answerP = document.createElement("p");
  answerP.id = `aId${index}`;
  answerP.textContent = questions[index].answer;

  content.appendChild(questionDiv);
  questionDiv.appendChild(questionP);
  questionDiv.appendChild(showAnswerButton);
})

const answer1P = document.createElement("p");
answer1P.textContent = questions[0].answer;
const answer2P = document.createElement("p");
answer2P.textContent = questions[1].answer;
const answer3P = document.createElement("p");
answer3P.textContent = questions[2].answer;

document.getElementById("button0").addEventListener("click", () => {
  document.getElementById("qDiv0").appendChild(answer1P);
  document.getElementById("button0").hidden = true;
});

document.getElementById("button1").addEventListener("click", () => {
  document.getElementById("qDiv1").appendChild(answer2P);
  document.getElementById("button1").hidden = true;
});

document.getElementById("button2").addEventListener("click", () => {
  document.getElementById("qDiv2").appendChild(answer3P);
  document.getElementById("button2").hidden = true;
});