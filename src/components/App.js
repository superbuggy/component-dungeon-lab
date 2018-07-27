import React, { Component } from 'react'
import Knob from './Knob'
import Octave from './Octave/Octave'
import Wheel from './Wheel/Wheel'

class App extends Component {
  render () {
    return (
      <div>
        {/* <Wheel slices={5} /> */}
        {/* <Knob /> */}
        <Octave />
      </div>
    )
  }
}

export default App
