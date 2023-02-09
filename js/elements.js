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


export {
  minutesDisplay,
  secondsDisplay,
  playButton,
  stopButton,
  addFiveButton,
  removeFiveButton,
  forestAudioButton,
  rainAudioButton,
  coffeeAudioButton,
  fireplaceAudioButton, 
  minutes
}