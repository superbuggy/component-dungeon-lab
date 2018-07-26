import React from 'react'
import WheelSection from './WheelSection'

const Wheel = ({slices, ...props}) => {
  const SVG_SIZE = 400
  const VIEWBOX_ORIGIN = -1.1
  const VIEWBOX_SIZE = Math.abs(VIEWBOX_ORIGIN) * 2
  const marginHorizontal = (window.innerWidth - SVG_SIZE) / 2
  const marginVertical = (window.innerHeight - SVG_SIZE) / 2
  const centeredMargins = {
    margin: `${marginVertical}px ${marginHorizontal}px`
  }

  const wheelSections = [...Array(slices).keys()].map((_, index) => (
    <WheelSection
      percentage={slices ? 1 / slices : 0.5}
      order={index}
      key={index}
      content={_}
      lit={Math.random() < 0.5}
    />
  ))

  return (
    <svg
      viewBox={`${VIEWBOX_ORIGIN} ${VIEWBOX_ORIGIN} ${VIEWBOX_SIZE} ${VIEWBOX_SIZE}`}
      style={centeredMargins}
      height={SVG_SIZE}
      width={SVG_SIZE}
    >
      { wheelSections }
      {/* TODO: Convert circle to mask? */}
      <circle
        cx={0}
        cy={0}
        r={0.6}
        fill={'white'}
      />
    </svg>
  )
}

export default Wheel
