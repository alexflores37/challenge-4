const quizData = [
  {
      question: 'What does HTML stand for?',
      choices: ['Hyper Text Markup Language', 'Hyperlink and Text Markup Language', 'Home Tool Markup Language', 'Hyper Transfer Markup Language'],
      correctAnswer: 'Hyper Text Markup Language',
  },
  {
      question: 'What is the correct syntax for referring to an external script called "script.js"?',
      choices: ['<script href="script.js">', '<script name="script.js">', '<script src="script.js">', '<script file="script.js">'],
      correctAnswer: '<script src="script.js">',
  },
  {
      question: 'How do you declare a variable in JavaScript?',
      choices: ['variable name;', 'var name;', 'v name;', 'variable = name;'],
      correctAnswer: 'var name;',
  },
 
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById('question');
const choicesElement = document.getElementById('choices');
const nextButton = document.getElementById('next-button');
const resultElement = document.getElementById('result');

function displayQuestion() {
  const currentQuizData = quizData[currentQuestion];
  questionElement.textContent = currentQuizData.question;

  choicesElement.innerHTML = '';
  currentQuizData.choices.forEach((choice, index) => {
      const choiceButton = document.createElement('button');
      choiceButton.textContent = choice;
      choiceButton.addEventListener('click', () => handleAnswerClick(index));
      choicesElement.appendChild(choiceButton);
  });
}

function handleAnswerClick(choiceIndex) {
  const currentQuizData = quizData[currentQuestion];
  if (currentQuizData.choices[choiceIndex] === currentQuizData.correctAnswer) {
      score++;
  }

  currentQuestion++;
  if (currentQuestion < quizData.length) {
      displayQuestion();
  } else {
      endQuiz();
  }
}

function endQuiz() 
 
  resultElement.textContent = `Quiz completed!\nYour score: ${score} out of ${quizData.length}`;
 

nextButton.addEventListener('click', () => {
  if (currentQuestion < quizData.length) {
      displayQuestion();
  } else {
      endQuiz();
  }
});


displayQuestion('whats the Markup language called?');