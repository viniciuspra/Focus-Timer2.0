import {
  playButton,
  stopButton,
  addFiveButton,
  removeFiveButton,
  forestAudioButton,
  rainAudioButton,
  coffeeAudioButton,
  fireplaceAudioButton
} from "./elements.js"

function svgFill(icon) {
  icon.querySelector('svg').style.fill = "white"
}

function bgButton(icon) {
  icon.style.backgroundColor = "#02799D"
}

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
  forestAudioButton.addEventListener("click", () => {
    svgFill(forestAudioButton)
    bgButton(forestAudioButton)

  })
  rainAudioButton.addEventListener("click", () => {
    svgFill(rainAudioButton)
    bgButton(rainAudioButton)
  })
  coffeeAudioButton.addEventListener("click", () => {
    svgFill(coffeeAudioButton)
    bgButton(coffeeAudioButton)
  })
  fireplaceAudioButton.addEventListener("click", () => {
    svgFill(fireplaceAudioButton)
    bgButton(fireplaceAudioButton)
  })

}