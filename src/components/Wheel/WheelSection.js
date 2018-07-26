import React from 'react'

const WheelSection = ({order, percentage, content, lit, ...props}) => {
  const xyFromPercentage = percentage => {
    const orientation = -0.25 // To rotate circle -90 degrees (-.25 turns)
    const offsetPercentage = percentage + orientation
    return {
      x: Math.cos(2 * Math.PI * offsetPercentage),
      y: Math.sin(2 * Math.PI * offsetPercentage)
    }
  }

  const turnOffset = order * percentage
  const startX = xyFromPercentage(turnOffset).x
  const startY = xyFromPercentage(turnOffset).y
  const endX = xyFromPercentage(percentage + turnOffset).x
  const endY = xyFromPercentage(percentage + turnOffset).y

  const largeArcFlag = percentage > 0.5 ? 1 : 0

  const arcPathData = [
    `M ${startX} ${startY}`,
    `A 1 1 0 ${largeArcFlag} 1 ${endX} ${endY}`,
    `L 0 0`
  ].join(' ')

  const TEXT_INSET = 0.77
  const textX = xyFromPercentage(percentage / 2 + turnOffset).x * TEXT_INSET
  const textY = xyFromPercentage(percentage / 2 + turnOffset).y * TEXT_INSET

  const sliceStyle = {
    strokeWidth: '.001',
    stroke: 'black',
    fill: lit ? 'white' : 'lightgrey'
  }

  const textStyle = {
    fontSize: '.15px',
    fill: lit ? 'lightgrey' : 'white',
    strokeLinecap: 'round',
    strokeWidth: '0.01',
    textAnchor: 'middle'
  }

  return (
    <g>
      <path
        d={arcPathData}
        style={sliceStyle}
      />
      <text style={textStyle} dx={'0em'} dy={'.5em'} x={textX} y={textY}>
        {content}
      </text>
    </g>
  )
}

export default WheelSection
