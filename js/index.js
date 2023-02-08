import Timer from './timer.js'
import {
  minutesDisplay,
  secondsDisplay,
  playButton,
  stopButton,
  moreFiveButton,
  lessFiveButton,
  fireplaceAudioButton,
  forestAudioButton,
  rainAudioButton,
  coffeeAudioButton
} from './elements.js'

const timer = Timer({ 
    minutesDisplay, 
    secondsDisplay 
  })

playButton.addEventListener('click', () => {
  timer.countdown();
})

stopButton.addEventListener('click', () => {
  timer.reset();
});

