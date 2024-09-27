const Div = document.querySelector("#questionDiv");

fetch('https://the-trivia-api.com/v2/questions')
    .then(response => response.json())
    .then(data => {
        const questions = data;

        Div.innerHTML = `
            <h1>Press Start to Enter Trivia</h1>
            <button id="startButton">Start</button>
        `;
        console.log(data)

        document.getElementById("startButton").addEventListener("click", () => {
            QuestionUpdate(questions);
        });
    })
    .catch((error) => {
        console.log(error);
    });

let currentQuestionIndex = 0; // Track the current question index

function QuestionUpdate(questions) {
    if (currentQuestionIndex < questions.length) {
        Div.innerHTML = `
            <h2>${questions[currentQuestionIndex].question.text}</h2>
            <button id="nextButton">Next</button>
        `
        

        document.getElementById("nextButton").addEventListener("click", () => {
            currentQuestionIndex++;
            QuestionUpdate(questions); // Update to the next question
        });
    } else {
        Div.innerHTML = `<h3>No more questions left</h3>`;
    }
}
