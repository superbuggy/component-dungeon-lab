import React, { Component } from 'react'
import Octave from './Octave'
import { oneOctaveKeyLayout, twoOctaveKeyLayout } from './KeyLayouts'

export default class PianoKeyboard extends Component {
  constructor (props) {
    super(props)
    const NOTE_NAMES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']
    this.keyLayout = props.octaves === 1 ? oneOctaveKeyLayout : twoOctaveKeyLayout
    this.notes = props.otacves === 1
      ? NOTE_NAMES
      : [...NOTE_NAMES, ...NOTE_NAMES.map(note => `${note}2`)]
    console.log(this.createNotesPlaying(props.octaves))
    this.state = {
      notesPlaying: this.createNotesPlaying(props.octaves)
    }
  }

  createNotesPlaying = octaves => {
    return this.notes.reduce((layout, note, index) => {
      return Object.assign(layout, { [note]: false })
    }, {})
  }

  componentDidMount = () => {
    window.addEventListener('keydown', this.handlePressedKey)
    window.addEventListener('keyup', this.handlePressedKey)
  }

  componentWillUnmount = () => {
    window.removeEventListener('keydown', this.handlePressedKey)
    window.removeEventListener('keyup', this.handlePressedKey)
  }

  handlePressedKey = event => {
    const note = this.keyLayout[event.key.toLowerCase()]
    if (event.key === 'Tab') event.preventDefault() // may not work in other browsers?
    if (note) {
      this.setState(prevState => ({
        notesPlaying: {
          ...prevState.notesPlaying,
          [note]: event.type === 'keydown'
        }
      }))
    }
  }

  render () {
    const octaves = [...Array(this.props.octaves).keys()].map(index => (
      <Octave
        width={this.props.width / this.props.octaves}
        height={this.props.height}
        order={index + 1}
        key={index}
        notesPlaying={this.state.notesPlaying} />
    ))

    return (
      <div>
        {octaves}
      </div>
    )
  }
}
