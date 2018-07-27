
import React from 'react'

const Key = ({order, note}) => {
  const xValues = {
    'C': 0,
    'C#': 14.33333,
    'D': 23,
    'D#': 41.66666,
    'E': 46,
    'F': 69,
    'F#': 82.25,
    'G': 92,
    'G#': 108.25,
    'A': 115,
    'A#': 134.75,
    'B': 138
  }

  const xValue = xValues[note]
  const key = !note.includes('#')
    ? <rect
      fill='white'
      stroke='black'
      x={xValue}
      y='0'
      width='23'
      height='120' />
    : <rect
      fill='black'
      stroke='black'
      x={xValue}
      y='0'
      width='13'
      height='80' />

  return key
}

export default Key
