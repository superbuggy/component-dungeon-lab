import React from 'react'
import Key from './Key'

const Octave = ({ width, height, notesPlaying }) => {
  const xValues = {
    'C': width * 0,
    'C#': width * 0.08902689440993788,
    'D': width * 0.14285714285714285,
    'D#': width * 0.2587991304347826,
    'E': width * 0.2857142857142857,
    'F': width * 0.42857142857142855,
    'F#': width * 0.5108695652173914,
    'G': width * 0.5714285714285714,
    'G#': width * 0.672360248447205,
    'A': width * 0.7142857142857143,
    'A#': width * 0.8369565217391305,
    'B': width * 0.8571428571428571
  }
  const naturals = ['C', 'D', 'E', 'F', 'G', 'A', 'B']
  const sharps = ['C#', 'D#', 'F#', 'G#', 'A#']

  const drawKeys = notes => notes.map((note, index) => (
    <Key
      order={index}
      key={note}
      note={note}
      x={xValues[note]}
      width={note.includes('#') ? 0.08075 * width : 0.14286 * width}
      lit={notesPlaying[note]}
    />))

  const keys = [...drawKeys(naturals), ...drawKeys(sharps)]

  return (
    <svg height={height} viewBox={`0 0 ${width} 120`}>
      {keys}
    </svg>
  )
}

export default Octave

// Based on https://commons.wikimedia.org/wiki/File:OctaveKeyboard.svg
// License below...
/*
     Copyright (c)  2005 Lauri Kaila.
     Permission is granted to copy, distribute and/or modify this document
     under the terms of the GNU Free Documentation License, Version 1.2
     or any later version published by the Free Software Foundation;
     with no Invariant Sections, no Front-Cover Texts, and no Back-Cover Texts.
     A copy of the license is included in the section entitled "GNU
     Free Documentation License".

     Intented to create a keyboard where key widths are
     accurately in position.

     See http://www.mathpages.com/home/kmath043.htm
     for the math.

     This keyboard has following properties (x=octave width).
     1. All white keys have equal width in front (W=x/7).
     2. All black keys have equal width (B=x/12).
     3. The narrow part of white keys C, D and E is W - B*2/3
     4. The narrow part of white keys F, G, A, and B is W - B*3/4

*/
