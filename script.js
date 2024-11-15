let questionList = ["Who won the first SuperBowl?", "What baseball team has won 27 world series?", "What is the name of the trophy awarded to the NHL playoff champion?", "What does NBA stand for?"];
let answerList = ['Green Bay Packers', 'New York Yankees', 'Stanley Cup', 'National Basketball Association'];
let score = 0;
let questionIndex = 0;

const button = document.querySelector(".submit");
const input = document.querySelector('#input-field');
const question = document.querySelector(".question");
let scoreContainer = document.querySelector('.score');

question.textContent = questionList[questionIndex];

let submitFunction = () =>{
    button.addEventListener('click', () => {
        if(input.value === answerList[questionIndex]){
            questionIndex += 1;
            score += 1;
            question.textContent = questionList[questionIndex];
            scoreContainer.textContent = "Score: " + score;
        }else{
            score -= 1;
            scoreContainer.textContent = "Score: " + score;
        }
        //put endgame function here
        endGame()
    });
}


let endGame = () => {
    if(questionIndex > 3){
        scoreContainer.textContent = "Final Score: " + score;
        question.textContent = "Congratulations, play again!";
        input.style.display = "none";
        button.style.display = "none";

    };
};
submitFunction()
