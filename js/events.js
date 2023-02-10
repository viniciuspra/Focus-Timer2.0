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



export default function Events( { timer, sound } ) {
  playButton.addEventListener("click", () => {
    timer.execCountdown()
    sound.pressButton()
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
     verifyEnable(
       forestAudioButton,
       rainAudioButton,
       coffeeAudioButton,
       fireplaceAudioButton
     )
     SoundManager.forest()  
  })
  rainAudioButton.addEventListener("click", () => {
     verifyEnable(
       rainAudioButton,
       fireplaceAudioButton,
       forestAudioButton,
       coffeeAudioButton
     )
      SoundManager.rain()
  })
  coffeeAudioButton.addEventListener("click", () => {
     verifyEnable(
       coffeeAudioButton,
       fireplaceAudioButton,
       forestAudioButton,
       rainAudioButton
     )
      SoundManager.coffee()
  })
  fireplaceAudioButton.addEventListener("click", () => {
    verifyEnable(
      fireplaceAudioButton,
      forestAudioButton,
      rainAudioButton,
      coffeeAudioButton
    )
     SoundManager.fireplace()
  })

  function verifyEnable(sound1, sound2, sound3, sound4) {
    if (
      sound2.classList.contains("enable") ||
      sound3.classList.contains("enable") ||
      sound4.classList.contains("enable")
    ) {
      sound1.classList.add("enable")
      sound2.classList.remove("enable")
      sound3.classList.remove("enable")
      sound4.classList.remove("enable")
    } else {
      sound1.classList.toggle("enable")
    }
  } 

  const SoundManager = {
    forest: () => {
      if (forestAudioButton.classList.contains("enable")) {
        sound.forestAudio.play()
        sound.rainAudio.pause()
        sound.coffeeAudio.pause()
        sound.fireAudio.pause()
      } else {
        sound.forestAudio.pause()
      }
        
    },
    rain: () => {
      if (rainAudioButton.classList.contains("enable")) {
        sound.rainAudio.play()
        sound.forestAudio.pause()
        sound.coffeeAudio.pause()
        sound.fireAudio.pause()
      } else {
        sound.rainAudio.pause()
      }
    },
    coffee: () => {
      if (coffeeAudioButton.classList.contains("enable")) {
        sound.coffeeAudio.play()
        sound.forestAudio.pause()
        sound.rainAudio.pause()
        sound.fireAudio.pause()
      } else {
        sound.coffeeAudio.pause()
      }
    },
    fireplace: () => {
      if (fireplaceAudioButton.classList.contains("enable")) {
        sound.fireAudio.play()
        sound.forestAudio.pause()
        sound.rainAudio.pause()
        sound.coffeeAudio.pause()
      } else {
        sound.fireAudio.pause()
      }
    }
  }
}