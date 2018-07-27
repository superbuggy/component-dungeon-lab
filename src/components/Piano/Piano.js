import React from 'react'
import Key from './Key'

const Piano = () => {
  const naturals = ['C', 'D', 'E', 'F', 'G', 'A', 'B']
  const sharps = ['C#', 'D#', 'F#', 'G#', 'A#']
  const drawKeys = notes => notes.map((note, index) => (
    <Key
      order={index}
      key={note}
      note={note}
    />
  ))
  const keys = [
    ...drawKeys(naturals),
    ...drawKeys(sharps)
  ]
  return (

    <svg
      // xmlSpace='preserve'
      width='161'
      height='120'
      viewBox='0 0 161 120'
    >
      {keys}
    </svg>
  )
}

export default Piano

// Based on https://commons.wikimedia.org/wiki/File:PianoKeyboard.svg
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
