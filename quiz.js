const form = document.querySelector(".quiz-form")
const btnCheck = document.querySelector(".check-btn-quiz")
const output = document.querySelector(".output")

const correctAnswers = ["90°","right angled"];

function checkAnswers(){
    const formData = new FormData(form)
    let score = 0;
    let index = 0;
    for(let value of formData.values()){
        if(value == correctAnswers[index]){
            score+=1;
        }
        index++;
    }
    output.innerText = "Your Score is " + score;
}

btnCheck.addEventListener('click',checkAnswers)

