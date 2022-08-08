const num1 = Math.floor(Math.random() * 10)
const num2 = Math.floor(Math.random() * 10)

const questionEl = document.getElementById('question').innerText = `What is ${num1} multiply by ${num2} ?`

const inputEl = document.getElementById('input')

const FormEl = document.getElementById('form').addEventListener('submit', () => {
    const userAnswer = +inputEl.value
    if (userAnswer === correctAns) {

        score++
        updatelocaleStorage()
    }
    else {
        score--
        updatelocaleStorage()
    }
})

const scoreEl = document.getElementById('score').innerText = `score:${score}`



let score = JSON.parse(localStorage.getItem('score'))
if (!score) {
    score = 0;
}


const correctAns = num1 * num2




function updatelocaleStorage() {
    localStorage.setItem('score', JSON.stringify(score))
}






