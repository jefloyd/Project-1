
var myQuestions = [
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
	

];


var quizContainer = document.getElementById('quiz');  
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

    function showQuestions(questions, quizContainer){
        // place to store the output and the answer choices
        var output = [];
        var answers;

        // for each question...
        for(var i=0; i<questions.length; i++){ //
            
            // reset the list of answers
            answers = [];

            // for each available answer...
            for(letter in questions[i].answers){ //this adds a radio button with the answers for each question

                // ...adds an html radio button
                answers.push(
                    '<label>'
                        + '<input type="radio" name="question'+i+'" value="'+letter+'">' 

                        + letter + ': '
                        + questions[i].answers[letter]
                    + '</label>'
                );

                answers.onclick = function(){  //this does nothing yet - hoping to get questions to generate one at a time
                	quizContainer.innerHTML = "";

                }
            }

            // add this question and its answers to the output
            output.push(
                '<div class="question">' + questions[i].question + '</div>' //this stores the answers selected
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }

        // combines our output list into one string of html and puts it on the page
        quizContainer.innerHTML = output.join(''); 
    }


    function showResults(questions, quizContainer, resultsContainer){  //creating function with attached parameters
        
       
        var answerContainers = quizContainer.querySelectorAll('.answers'); //selects the stored answers from the quiz from the answers var
        
        // keep track of user's answers
        var userAnswer = ''; //keeps track of which answer the user selected
        var numCorrect = 0; //keeps track of if the user was right or wrong
        
        
        for(var i=0; i<questions.length; i++){//for loop iterates over the  questions answers

            // find selected answer
            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;  //
            
            // if answer is correct
            if(userAnswer===questions[i].correctAnswer){
                // add to the number of correct answers
                numCorrect++;
                
                // color the answers green
                answerContainers[i].style.color = 'lightgreen';
            }
            // if answer is wrong or blank
            else{
                // color the answers red
                answerContainers[i].style.color = 'red';
            }
        }

        // show number of correct answers out of total
        resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
    }

    // show questions right away
    showQuestions(questions, quizContainer);
    
    // on submit, show results
    submitButton.onclick = function(){
        showResults(questions, quizContainer, resultsContainer);
    }

}

