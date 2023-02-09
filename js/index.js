import Events from './events.js'
import Timer from './timer.js'
import {
  minutesDisplay,
  secondsDisplay,
  forestAudioButton,
  rainAudioButton,
  coffeeAudioButton,
  fireplaceAudioButton,
  minutes
} from "./elements.js"

const timer = Timer({ 
  minutesDisplay, 
  secondsDisplay,
  minutes
})

Events( { timer } )


