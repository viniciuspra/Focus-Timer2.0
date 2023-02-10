import Events from './events.js'
import Timer from './timer.js'
import Sounds from './sounds.js'
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

const sound = Sounds()

Events( { timer, sound } )


