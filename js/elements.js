const minutesDisplay = document.querySelector(".minutes")
const secondsDisplay = document.querySelector(".seconds")
const playButton = document.querySelector(".play")
const stopButton = document.querySelector(".stop")
const addFiveButton = document.querySelector(".more")
const removeFiveButton = document.querySelector(".less")
const forestAudioButton = document.querySelector("#forest")
const rainAudioButton = document.querySelector("#rain")
const coffeeAudioButton = document.querySelector("#coffee-shop")
const fireplaceAudioButton = document.querySelector("#fireplace")
const btnMobile = document.querySelector("#btn-mobile")
const soundsButton = document.querySelector(".sounds")
const TimerDisplay = document.querySelector('.timer');
const root = document.querySelector(':root');
const ThemeMode = document.querySelector('#theme-mode');

const getStyle = (element, style) =>
  window.getComputedStyle(element).getPropertyValue(style)

const initialColor = {
  bgBody: getStyle(root, '--bg-body'),
  textColor: getStyle(root, '--text-color'),
  bgSound: getStyle(root, '--bg-sound'),
  enableButton: getStyle(root,'--enable-button'),
  svgFill: getStyle(root, '--svg-fill'),
}

const darkMode = {
  bgBody: "#121214",
  textColor: "white",
  bgSound: "#29292E",
  enableButton: "#0A3442",
  svgFill: "#C4C4CC",
}

const trasformKeys = key => '--' + key.replace(/([A-Z])/, "-$1").toLowerCase()

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
  btnMobile,
  soundsButton,
  TimerDisplay,
  ThemeMode,
  initialColor,
  darkMode,
  root
}