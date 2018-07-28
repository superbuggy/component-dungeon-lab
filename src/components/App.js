import React, { Component } from 'react'
import Knob from './Knob'
import PianoKeyboard from './PianoKeyboard/PianoKeyboard'
import Wheel from './Wheel/Wheel'

class App extends Component {
  render () {
    return (
      <div>
        {/* <Wheel slices={5} /> */}
        {/* <Knob /> */}
        <PianoKeyboard octaves={1} height={200} width={600} />
      </div>
    )
  }
}

export default App
