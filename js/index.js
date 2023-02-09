const minutesDisplay = document.querySelector(".minutes")
const secondsDisplay = document.querySelector(".seconds")
const playButton = document.querySelector(".play")
const stopButton = document.querySelector(".stop")
const addFiveButton = document.querySelector(".more")
const removeFiveButton = document.querySelector(".less")
const forestAudioButton = document.querySelector(".forest")
const rainAudioButton = document.querySelector(".rain")
const coffeeAudioButton = document.querySelector(".coffee-shop")
const fireplaceAudioButton = document.querySelector(".fireplace")
let minutes = Number(minutesDisplay.textContent)
let seconds = Number(secondsDisplay.textContent)
let TimerTimeOut
let check = false

function updateDisplay(minutes, seconds) {
  minutesDisplay.textContent = String(minutes).padStart(2, "0")
  secondsDisplay.textContent = String(seconds).padStart(2, "0")
}
function countdown() {
  TimerTimeOut = setTimeout(() => { 
      let minutes = Number(minutesDisplay.textContent)
      let seconds = Number(secondsDisplay.textContent)

      updateDisplay(minutes, 0)

      if (minutes <= 0 && seconds <= 0) {
        updateDisplay(0, 0)
        return
      }

      if (seconds <= 0) {
        seconds = 60
        --minutes
      }
      
      updateDisplay(minutes, Number(seconds - 1))

      countdown()
  }, 1000)
}

function resetDisplay() {
  updateDisplay(minutes, 0)
  clearTimeout(TimerTimeOut)
}


playButton.addEventListener("click", () => {
  if (!check) {
    countdown()

    check = true
  }
})

stopButton.addEventListener("click", () => {
  check = false
  resetDisplay()
})

addFiveButton.addEventListener("click", () => {
  if (minutes >= 95) {
    return
  }
  minutes = minutes + 5
  resetDisplay()
  check = false
})
removeFiveButton.addEventListener("click", () => {
  if (minutes == 0) {
    return
  }
  minutes = minutes - 5
  resetDisplay()
})