import {
  playButton,
  stopButton,
  addFiveButton,
  removeFiveButton
} from './elements.js'

export default function Events( { timer } ) {
  playButton.addEventListener("click", () => {
    timer.execCountdown()
  })
  stopButton.addEventListener("click", () => {
    timer.resetDisplay()
  })
  addFiveButton.addEventListener("click", () => {
    timer.addFive()
  })
  removeFiveButton.addEventListener("click", () => {
    timer.removeFive()
  })
}