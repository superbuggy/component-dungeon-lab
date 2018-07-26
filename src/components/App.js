import React, { Component } from 'react'
import Knob from './Knob'
import Wheel from './Wheel/Wheel'

class App extends Component {
  render () {
    return (
      <div>
        <Wheel slices={5} />
        <Knob />
      </div>
    )
  }
}

export default App
