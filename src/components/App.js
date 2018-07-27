import React, { Component } from 'react'
import Knob from './Knob'
import Piano from './Piano/Piano'
import Wheel from './Wheel/Wheel'

class App extends Component {
  render () {
    return (
      <div>
        {/* <Wheel slices={5} /> */}
        {/* <Knob /> */}
        <Piano />
      </div>
    )
  }
}

export default App
