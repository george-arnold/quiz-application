const STORE = [
    {
        question: 'What percentage of high school students in the US are enrolled in vocational programs?',
        answers: [
            '32%','6%','15%','65%'
        ],
        correctAnswer: '6%'
    }
];

//initialize variables that control current question num and score num
let score = 0;
let currentQuestion = 0;


    
function startHandler() {
//handles the START button
$('.js-start-button').click(function() {
 generateQuestion(STORE[currentQuestion].question,STORE[currentQuestion].answers);
    });
}

function generateQuestion(questionItem,answerChoices) {
$(".js-question-box").html('<form> <fieldset> <legend class="question">' + questionItem + '</legend> </fieldset> </form>');
console.log(answerChoices);
}

function updateQuestionNumber() {
//update question number
}
function updateScoreNumber(){

}
//allow user to submit answer, alert if no answer is selected
function submitAnswerHandler() {
//check user answer against real answer
//if correct: prompt that user is correct, add 1 to the score
//if incorrect: prompt the correct answer
}
function nextQuestion() {
//advance to next question-->generateQuestion
currentQuestion++;
generateQuestion(STORE[currentQuestion.question]);
//update the question number and the score number
//if final question, call showFinalScreen
}

function showFinalScreen(){
//no more questions exist, generate final screen
}

function restartQuiz(){
//restart quiz
generateQuestion(0);
}

function startQuizApp() {
    startHandler();
}
$(startQuizApp)