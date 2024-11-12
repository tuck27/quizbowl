const changeSubmitButton = document.querySelector("#changeSubmitButton");
const submitButton = document.querySelector("#submit-button");
const input = document.querySelector('#input-field');
const questionElement = document.querySelector(".question p");

function changeQuestion() {
    const questions = [
        "Who won the first SuperBowl?",
        "What baseball team has won 27 world series?",
    ]
    changeSubmitButton.addEventListener("click", () => {
        const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
        questionElement.textContent = randomQuestion;
    })
};
changeQuestion()
