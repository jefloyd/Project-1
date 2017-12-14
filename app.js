

//this function actually generates the quiz
function generateQuiz(questions, quizContainer, resultsContainer, submitButton){


	function showQuestions(questions, quizContainer){
		var output = [];
		var answers;

		//for each question - need a for loop
		for(var i=0; i<questions.length; i++){


			answers= [];

			for(letter in questions[i].answers){

				answers.push(
					'<label>' 
						+ '<input type ="radio" name="questions'+i+'" value ="'+letter+'">'
						+ letter + ': '
						+ questions[i].answers[letter]
					+'</label>'

					);//end of answer .push

			} // end of for(letter...)

			output.push(
				'<div class="question">' + questions[i].questions + '</div>'
				+ '<div class ="answers">' + answers.join('') + '</div>'
				);

		} //end of for loop 

		quizContainer.innerHTML = output.join('');
	}//end of function showQuestions
	showQuestions(questions,quizContainer);

	function showResults(questions, quizContainer, resultsContainer){
		
		var answerContainers = quizContainer.querySelectorAll('.answers');

		//to keep track of user's answers
		var userAnswer = '';
		var numCorrect = 0;

		//for each question - need to run a for loop
		for(var i=0; i<questions.length; i++){

			//finds the selected answer
			userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;

			//if answer is correct
			if(userAnswer===questions[i].correctAnswer){
				//add to the number of correct answers
				numCorrect++;

				answerContainers[i].style.color = 'lightgreen';

			}
			else{
				answerContainers[i].style.color = 'red';
			}

		}//end of for loop

		resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;


	}//end of function showResults


	showQuestions(questions, quizContainer);

	submitButton.onClick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}//end of submitButton.onClick

}//end of funtion generateQuiz





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
		question: "The fastest animal on land is the...?",
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
			b: "False",
			
		},
		correctAnswer: "a"
		
	}

];





/*

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
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
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }


  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");

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

  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();

*/
