export default function Timer( { 
  minutesDisplay,
  secondsDisplay
 }) {
     
    let minutes = Number(minutesDisplay.textContent);

    function UpdateDisplay (minutes, seconds) {
      minutesDisplay.textContent = String(minutes).padStart(2, "0")
      secondsDisplay.textContent = String(seconds).padStart(2, "0")
    }

    function reset() {
      UpdateDisplay(minutes, 0)
      clearTimeout(TimerTimeOut)
    }

    function countdown() {
      TimerTimeOut = setTimeout (function () {
        let minutes = Number(minutesDisplay.textContent);
        let seconds = Number(secondsDisplay.textContent);

        UpdateDisplay(minutes, 0)

        if (seconds <= 0) {
          seconds = 60
          --minutes
        }

        UpdateDisplay(minutes, String( seconds - 1 ))

        countdown()

      }, 1000)}

      return {
        countdown,
        reset,
      }
 } 
