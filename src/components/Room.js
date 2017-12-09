import React from 'react'

export default props => {
  const size = 450
  const wallSize = 450 / 3.75
  
  const roomStyle = {
    minHeight: `${size}px`,
    maxWidth: `${size}px`,
    borderTop: `${wallSize}px solid lightgrey`,
    borderBottom: `${wallSize}px solid lightgrey`,
    borderLeft: `${wallSize}px solid grey`,
    borderRight: `${wallSize}px solid grey`,
    boxSizing: 'border-box',
    overflow: 'hidden',
    textAlign: 'center',
    paddingTop: '50px',
    background: 'rgb(232,232,232)'
  }
  return <div style={roomStyle}>{props.children} </div>
}
