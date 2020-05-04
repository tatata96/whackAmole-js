const square = document.querySelectorAll('.square')
const mole = document.querySelectorAll('.mole')
const timeLeft = document.querySelector('#time-left')
let score = document.querySelector('#score')

let result = 0;
let currenTime = 61;

function randomSquare() {
    square.forEach(className => {
        className.classList.remove('mole')

    })
    let randomPos = square[Math.floor(Math.random() * 9)]


    randomPos.classList.add('mole')

    //assign 

    hitPos = randomPos.id;
}


square.forEach(s => {
    s.addEventListener('click', () => {
        if (s.id === hitPos) {
            result = result + 1
            score.textContent = result
            hitPos = null
        }

    })
})

function moveMole() {
    let timerId = null
    timerId = setInterval(randomSquare, 500)
}
moveMole();

function countDown() {
    currenTime--
    timeLeft.textContent = currenTime

    if (currenTime === 0) {
        clearInterval(timerId)
        alert("GAME OVER YOUR FINAL SCORE IS" + result)
    }
}

let timerId = setInterval(countDown, 1000)