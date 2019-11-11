const STORE = [
    {//Question 1
        question: 'What percentage of high school students in the US are enrolled in vocational programs?',
        answers: [
            '32%','6%','15%','65%'
        ],
        correctAnswer: 1,
        imagePath: '/images/high-school.jpeg'
    },
    {//Question 2
        question: 'Approximately what percentage of US college graduates are in jobs that don’t require the degree they earned? ',
        answers: [
            '10%','22%','15%','33%'
        ],
        correctAnswer: 3,
        imagePath: '/images/degrees-2.jpeg'
    },
    {//Question 3
        question: 'Six years after first enrolling in college, approximately what percentage of students have not obtained a degree??',
        answers: [
            '40%','30%','25%','17%'
        ],
        correctAnswer: 0,
        imagePath: '/images/question-4-image.png'
    },
    {//Question 4
        question: ' In the next 12 years, 1 of every ___ Americans are in danger of losing their jobs to new technologies',
        answers: [
            '10','7','3','20'
        ],
        correctAnswer: 2,
        imagePath: '/images/question-3-image.jpg'
    },
    {//Question 5
        question: ' Which current US presidential candidate has vowed to help correct the over-prescription of college,'
        + 'and limit the danger of job loss, by increasing funding towards vocational training options in public schools?',
        answers: [
            'Bernie Sanders','Elizabeth Warren','Joe Biden','Andrew Yang'
        ],
        correctAnswer: 3,
        imagePath: '/images/question-5.png'
    }
];

//initialize variables that control current question num and score num
let score = 0;
let currentQuestion = 0;
let possibleScore = 0;
let questionNumber =  1;

 // handles the Start button   
function startHandler() {

$('.js-start-button').click(function() {
 generateQuestion(STORE[currentQuestion].question,STORE[currentQuestion].answers);
    });
}

//generates a new question and displays it in js-question-box
function generateQuestion(questionItem,answerChoices) {
   updateQuestionNumber();
    $(".js-question-box").html('<form> <fieldset> <legend class="question">' + questionItem + '</legend> <img width="200px" src="'+ STORE[currentQuestion].imagePath+ '"> <div class= "js-answers"></div> ');
let answerOptions = STORE[currentQuestion].answers;
for (i=0; i<answerOptions.length;i++) {
    $(".js-answers").append('<input type="radio" id="ans-'+i+'" value='+i+'>  <label for="ans-'+i+'">' + answerOptions[i]+'</label> <br>');
}
$(".js-question-box form fieldset").append('<button class="answer-submit" type="submit" for="question">Submit!</button> </fieldset> </form>');
}

// Handles results of incorrect and correct answers and updates scores accordingly
function updateQuestionNumber() {
$(".question-number").html(questionNumber);
}
function updateScoreNumber(){
$(".current-score").html(score);
possibleScore += 1;
$(".possible-score").html(possibleScore);

}
function correctAnswer() {
    score += 1;
    $(".js-question-box").html("<h3>That's correct!</h3> <br> <button class='next' type='submit'>Next</button>")
}

function incorrectAnswer() {
    $(".js-question-box").html("<h3>That is incorrect!</h3> <br> <button class='next' type='submit'>Next</button>")
    
}

function displayAnswerInformation(){
// shows additional information about the correct answer, and renders the "next" button

}

function submitAnswerHandler() {
    $(".js-question-box").on("click","button[class='answer-submit']",function (event){
    event.preventDefault();
    let correctOption = STORE[currentQuestion].correctAnswer;
if ($('input:checked').val() === undefined) {
alert ("You must select an answer");
} else {
if ($('input:checked').val()==correctOption) {
    correctAnswer();
    updateScoreNumber();
    displayAnswerInformation();
} else {
    incorrectAnswer();
    updateScoreNumber();
    displayAnswerInformation();
    
}
}
})

}
function nextQuestionHandler() {
    
$('.js-question-box').on("click","button[class='next']", function(event) {
    event.preventDefault();
    if (currentQuestion<STORE.length-1){
    currentQuestion += 1;
    questionNumber += 1;
    generateQuestion(STORE[currentQuestion].question,STORE[currentQuestion].answers);
    }
    else { 
        showFinalScreen();
    }
   
})

//update the question number and the score number
//if final question, call showFinalScreen
}

function showFinalScreen(){
    $(".js-question-box").html('<h2>Congrats! Your Final Score was ' + score +'/5</h2>'
    +'<button class= "restart-button" type="submit"> Restart </button>');
    $(".js-question-box").on("click","button[class='restart-button']", function(event){
        event.preventDefault();
        restartQuiz();
    })
}

function restartQuiz(){
score = 0;
currentQuestion = 0;
possibleScore = 0;
questionNumber =  1;
generateQuestion(STORE[currentQuestion].question,STORE[currentQuestion].answers);
updateScoreNumber();
}

function startQuizApp() {
    startHandler();
    submitAnswerHandler();
    nextQuestionHandler();
}
$(startQuizApp);