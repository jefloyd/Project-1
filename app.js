const quizContainer =
document.getElementById('quiz');//these are constant variables that store references from HTML tags  

const resultsContainer =
document.getElementById('results');

const submitButton =
document.getElementById('submit');


//lay out functions to be filled out as I go along

function buildQuiz(){}   //build a quiz function

function showResults(){} //show results function

//display quiz right away

 //buildQuiz();  

//on submit,show results
submitButton.addEventListener('click', showResults);

//use object literals to represent individual questions 
//use array to hold all questions of quiz . will make easier to iterate over

const myQuestions = [
	{
		question: "Who was the first President of the United States?",
		answers: {
			a: "Benjamin Franklin",
			b: "George Washington",
			c: "Abraham Lincoln",
			d: "George Lincoln"
		},
		correctAnswer: "b"
	},

	{
		question: "What is the longest river in the world?",
		answers: {
			a: "The Mississippi",
			b: "The Fertile River",
			c: "The Nile",
			d: "The Allagash"
		},
		correctAnswer: "c"

	},

	{
		question: "What can a group of crows be called?",
		answers: {
			a: "A murder",
			b: "A pride",
			c: "A school",
			d: "A herd"
		},
		correctAnswer: "a"

	},
	{
		question: "True or False? Sharks are mammals.",
		answers:{
			a: "True",
			b: "False"
		},
		correctAnswer: "b"
	},
	{
		question: "True or False? Herbivores eat meat.",
		answers:{
			a: "True",
			b: "False"
		},
		correctAnswer: "b"
	},
	{
		question: "The United States is located on which continent?",
		answers:{
			a: "Pangea",
			b: "Europe",
			c: "South America",
			d: "None of these"
		},
		correctAnswer: "d"
		
	},
	{
		question: "Where is the Statue of Liberty located?",
		answers:{
			a: "New York",
			b: "New Jersey",
			c: "Maryland",
			d: "Vermont"
		},
		correctAnswer: "a"
		
	},
	{
		question: "What is the closest planet to the sun?",
		answers:{
			a: "Venus",
			b: "Jupiter",
			c: "Mercury",
			d: "Neptune"
		},
		correctAnswer: "c"
		
	},
	{
		question: "What is the fastest animal in the world?",
		answers:{
			a: "Jaguar",
			b: "Cheetah",
			c: "Horse",
			d: "Deer"
		},
		correctAnswer: "b"
		
	},
	{
		question: "True or false? This quiz was awesome!",
		answers:{
			a: "True",
			b: "True",
			
		},
		correctAnswer: "a"
		
	},

]

function buildQuiz(){
  // we'll need a place to store the HTML output
  const output = [];

  // for each question...
  myQuestions.forEach((currentQuestion, questionNumber) => {

      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for(letter in currentQuestion.answers){

        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join('')} </div>`
      );
    }
  );

  // finally combine our output list into one string of HTML and put it on the page
  quizContainer.innerHTML = output.join('');
}


///////////////////////////////////////


function showResults(){

const answerContainer = quizContainer.querySelectorAll('.answers'); //gathers answer containers from quiz

let numCorrect = 0; //keep track of users's answers

myQuestions.forEach( (currentQuestion, questionNumber) => {

	const answerContainer = answerContainers[questionNumber];
	const selector = `input[name=question${questionNumber}]:checked`;
	const userAnswer = (answerContainers.querySelectorAll(selector) || {}).value;

	//if answer is correct
	if(userAnswer===currentQuestion.correctAnswer){
		//add to the number of correct answers
		numCorrect++;

		answerContainers[questionNumber].style.color = 'lightgreen';
	}

	else {
		answerContainers[questionNumber].style.color= 'red';
	
}
});

resultsContainer.innerHTML=numCorrect + ' out of ' + myQuestions.length;
}
