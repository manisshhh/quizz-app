const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));

// console.log(choices);
let currentQuestion = [];
let acceptingAnswers = [];
let score = 0;
let questionCounter = 0;
let availableQuestion = [];

let questions = [
  {
    question: "1 + 1 is equal to ",
    choice1: "1",
    choice2: "2",
    choice3: "3",
    choice4: "4",
    answer: "2"
  },
  {
    question: "5 + 1 is equal to ",
    choice1: "1",
    choice2: "2",
    choice3: "6",
    choice4: "4",
    answer: "3"
  },
  {
    question: "7 + 1 is equal to ",
    choice1: "8",
    choice2: "2",
    choice3: "3",
    choice4: "4",
    answer: "1"
  },
  {
    question: "What is your wife name",
    choice1: "rose",
    choice2: "merry",
    choice3: "marlo",
    choice4: "loude",
    answer: "4"
  }
];

//CONSTANTS

const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;

startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuestion = [...questions];
  //   console.log(availableQuestion);
  getNewQustion();
};

getNewQustion = () => {
  if (availableQuestion.length === 0 || questionCounter > MAX_QUESTIONS) {
    return window.location.assign("/end.html");
  }
  questionCounter++;
  const questionIndex = Math.floor(Math.random() * availableQuestion.length);
  currentQuestion = availableQuestion[questionIndex];
  question.innerText = currentQuestion.question;

  choices.forEach(choice => {
    const number = choice.dataset["number"];
    // console.log();
    choice.innerText = currentQuestion["choice" + number];
  });

  availableQuestion.splice(questionIndex, 1);
  acceptingAnswers = true;
};

choices.forEach(choice => {
  choice.addEventListener("click", e => {
    // console.log(e);
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];
    const classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

    selectedChoice.parentElement.classList.add(classToApply);

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);

      getNewQustion();
    }, 1000);
  });
});

startGame();
