import React from 'react'

const Key = ({order, note, lit, x, width}) => {
  // const xValues = {
  //   'C': 0,
  //   'C#': 14.33333,
  //   'D': 23,
  //   'D#': 41.66666,
  //   'E': 46,
  //   'F': 69,
  //   'F#': 82.25,
  //   'G': 92,
  //   'G#': 108.25,
  //   'A': 115,
  //   'A#': 134.75,
  //   'B': 138
  // }

  return note.includes('#')
    ? <rect
      fill={lit ? 'red' : 'black'}
      stroke='black'
      x={x}
      y='0'
      width={width}
      height='80' />
    : <rect
      fill={lit ? 'red' : 'white'}
      stroke='black'
      x={x}
      y='0'
      width={width}
      height='120' />
}

export default Key
