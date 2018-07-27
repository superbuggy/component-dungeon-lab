import React, { Component } from 'react'
import Octave from './Octave'

export default class PianoKeyboard extends Component {
  constructor (props) {
    super(props)
    this.state = {
      octaves: 1,
      activeOctave: null,
      notesPlaying: {
        'C': false,
        'C#': false,
        'D': false,
        'D#': false,
        'E': false,
        'F': false,
        'F#': false,
        'G': false,
        'G#': false,
        'A': false,
        'A#': false,
        'B': false
      }
    }
  }

  componentDidMount () {
    window.addEventListener('keypress', this.handleKeyPress)
    window.addEventListener('keyup', this.handleKeyUp)
  }

  componentDidUnmount () {
    window.removeEventListener('keypress', this.handleKeyPress)
    window.removeEventListener('keyup', this.handleKeyUp)
  }

  handleKeyUp = event => {
    console.log('up')
    const notes = {
      'a': 'C',
      'w': 'C#',
      's': 'D',
      'e': 'D#',
      'd': 'E',
      'f': 'F',
      't': 'F#',
      'g': 'G',
      'y': 'G#',
      'h': 'A',
      'u': 'A#',
      'j': 'B'
    }
    if (notes[event.key]) {
      this.setState(prevState => ({
        notesPlaying: {
          ...prevState.notesPlaying,
          [notes[event.key]]: false
        }
      }))
    }
  }

  handleKeyPress = event => {
    const notes = {
      'a': 'C',
      'w': 'C#',
      's': 'D',
      'e': 'D#',
      'd': 'E',
      'f': 'F',
      't': 'F#',
      'g': 'G',
      'y': 'G#',
      'h': 'A',
      'u': 'A#',
      'j': 'B'
    }
    if (notes[event.key]) {
      this.setState(prevState => ({
        notesPlaying: {
          ...prevState.notesPlaying,
          [notes[event.key]]: true
        }
      }))
    }
  }

  render () {
    const octaves = [...Array(this.state.octaves).keys()].map(index => (
      <Octave height={300} key={index} notesPlaying={this.state.notesPlaying} />
    ))

    return (
      <div>
        {octaves}
      </div>
    )
  }
}
