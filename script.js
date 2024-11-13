const changeSubmitButton = document.querySelector("#changeSubmitButton");
const submitButton = document.querySelector("#submit-button");
const input = document.querySelector('#input-field');
const questionElement = document.querySelector(".question p");


let questionList = [
    "Who won the first SuperBowl?",
    "What baseball team has won 27 world series?",
    "What is the name of the trophy awarded to the NHL playoff champion?",
    "What does NBA stand for?"
]
questionElement.textContent = questionList[0];
changeSubmitButton.addEventListener("click", () => {
    const randomQuestion = questionList[Math.floor(Math.random() * questionList.length)];
    questionElement.textContent = randomQuestion;
});

let answerList = [
    'Green Bay Packers',
    'New York Yankees',
    'Stanley Cup',
    'National Basketball Association'
]
questions.textContent = questionList[0];
input.textContent = answerList[0];

if (input === 0){
    submitButton.addEventListener("click", () => {
        answerList 
    })
}