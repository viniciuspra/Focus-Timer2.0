export default function Sounds() {
  const buttonPressAudio = new Audio(
    "https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true"
  )
  const kitchenTimer = new Audio(
    "https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true"
  )

  const forestAudio = new Audio("./sounds/Floresta.wav")
  const rainAudio = new Audio("./sounds/Chuva.wav")
  const coffeeAudio = new Audio("./sounds/Cafeteria.wav")
  const fireAudio = new Audio("./sounds/Lareira.wav")

  forestAudio.loop = true
  rainAudio.loop = true
  coffeeAudio.loop = true
  fireAudio.loop = true

  function pressButton() {
    buttonPressAudio.play()
  }
  function timeEnd() {
    kitchenTimer.play()
  }

  return {
    pressButton,
    timeEnd,
    forestAudio,
    rainAudio,
    coffeeAudio,
    fireAudio
  }
}