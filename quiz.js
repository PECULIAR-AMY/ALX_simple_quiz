function checkAnswer() {
    var correctAnswer = "4"
}

var checkRadioButton = document.querySelector ('input [name="quize"]:checked');

var selectedRadioAnswer = selectedRadioButton.value;
console.log(userAnswer);

var feedBackElement = document.getElementById('feedback');
if (userAnswer === correctAnswer) {
    feedBackElement.textContent = "Correct! Well done.";
 } else {
        feedBackElement.textContent = "That's incorrect. Try again!";
    }

var submitAnswerButton = document.getElementById ('submit-answer');
submitAnswerButton.addEventListener('click',checkAnswer);


