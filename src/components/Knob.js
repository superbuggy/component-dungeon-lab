import React, { Component } from 'react'
import { styled } from 'styletron-react'

class Knob extends Component {
  constructor (props) {
    super(props)
    this.state = {
      mouseX: null,
      mouseY: null,
      mouseDown: false
    }
  }

  componentDidMount () {
    window.addEventListener("mouseup", this.onMouseUp)
    window.addEventListener("mousemove", this.onMousedownMove)
  }

  componentWillUnmount () {
    console.log("unmounting")
    window.removeEventListener("mouseup", this.onMouseUp)
    window.removeEventListener("mousemove", this.onMousedownMove)
  }

  onMouseUp = _ => {
    this.setState({
      mouseDown: false
    })
  }

  onMousedownMove = evt => {
    if (this.state.mouseDown) {
      this.setState({
        mouseX: evt.clientX,
        mouseY: evt.clientY
      })
    }
  }

  onMouseDown = _ => {
    this.setState({mouseDown: true})
  }

  render () {
    const center = 46 // width / 2 - markerBorderTotalPx
    const xDist = this.state.mouseX - center
    const yDist = this.state.mouseY - center
    const radians = Math.atan2(yDist, xDist)
    let degrees = parseInt(radians * (180/Math.PI))
    if (degrees < 0) degrees = 360 + degrees
    let dialDegrees = (degrees + 90) % 360
    if (dialDegrees < 240 && dialDegrees > 180) dialDegrees = 240 
    if (dialDegrees > 120 && dialDegrees <= 180) dialDegrees = 120 

    const Marker = styled('div', {
      position: 'absolute',
      minHeight: '10px',
      maxWidth: '0px',
      left: `${center}px`,
      border: '2px solid black',
      boxSizing: 'border-box'
    })

    const Dial = styled('div', {
      boxSizing: 'border-box',
      minHeight: '100px',
      maxWidth: '100px',
      border: '2px solid black',
      borderRadius: '50%',
      transform: `rotate(${dialDegrees}deg)`
    })

    return (
      <div>
        <Dial onMouseDown={this.onMouseDown}>
          <Marker />
        </Dial>
        {
          `${this.state.mouseX}, ${this.state.mouseY}, ${dialDegrees} ${degrees}`
        }
      </div>
    ) 
  }
}

export default Knob
