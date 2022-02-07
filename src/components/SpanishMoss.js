import _ from 'lodash'
import React, {Component} from 'react'

const randomCombinatorialDiacriticCharCode = () => `0${(Math.floor(Math.random() * 112) + 768)}`
const randomCombinatorialDiacritic = () => String.fromCharCode(randomCombinatorialDiacriticCharCode())
export default class SpanishMoss extends Component {
  constructor(props) {
    super(props)
    this.state = {
      chaosDepth: 0,
      timer: null
    }
  }

  mossify(baseString, chaosDepth) {
    return [...baseString].map(
      originalChar => Array.from({length: chaosDepth}).reduce(noisyChar => noisyChar + randomCombinatorialDiacritic(), "") + originalChar
    ).join('')
  }

  componentDidMount() {
    const timer = setInterval(this.modulateNoise, this.props.milliseconds)
    this.setState(_ => ({timer}))
  }

  modulateNoise = () => {
    const chaosDepth = parseInt(Math.random() * 28) + 20
    this.setState(_ => ({chaosDepth}))
  }

  render() {
    const baseString = "Abandon all hope all ye who enter here"
    const containerStyle = {
      fontFamily: 'Courier',
      textAlign: 'center',
      overflowWrap: 'break-word'
    }
    return (
      <div style={containerStyle}>
        {this.mossify(baseString, this.state.chaosDepth)}
      </div>
    )
  }
}
