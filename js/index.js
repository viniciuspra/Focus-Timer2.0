import Events from './events.js'
import Timer from './timer.js'
import Sounds from './sounds.js'
import {
  minutesDisplay,
  secondsDisplay
} from "./elements.js"

const timer = Timer({ 
  minutesDisplay, 
  secondsDisplay
})

const sound = Sounds()

Events( { timer, sound } )