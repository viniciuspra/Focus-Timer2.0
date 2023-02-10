import Sounds from "./sounds.js"

export default function Timer( {
  minutesDisplay,
  secondsDisplay,
  minutes
} ) {
  
  minutes = Number(minutesDisplay.textContent)
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
      let isFinish = minutes <= 0 && seconds <= 0

      updateDisplay(minutes, 0)

      if (isFinish) {
        resetDisplay()
        Sounds().timeEnd()
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
    check = false
  }

  function addFive() {
    if (minutes >= 95) {
      return
    }
    minutes = minutes + 5
    resetDisplay()
  }

  function removeFive() {
    if (minutes == 0) {
      return
    }
    minutes = minutes - 5
    resetDisplay()
  }

  function execCountdown() {
    if (!check) {
      countdown()

      check = true
    }
  }

  return {
    countdown,
    resetDisplay,
    addFive,
    removeFive,
    execCountdown
  }
}