import React from 'react'

const Key = ({order, note, lit, x, width, height}) => {
  return note.includes('#')
    ? <rect
      fill={lit ? 'red' : 'black'}
      stroke='black'
      x={x}
      y='0'
      width={width}
      height={height * 0.666} />
    : <rect
      fill={lit ? 'red' : 'white'}
      stroke='black'
      x={x}
      y='0'
      width={width}
      height={height} />
}

export default Key
