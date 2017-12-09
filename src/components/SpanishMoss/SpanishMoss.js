import _ from 'lodash'
import React, { Component } from 'react'
import UNICODE_COMBINATORIAL_DIACRITICS from './CombinatorialDiacriticUnicodes'


export default class SpanishMoss extends Component {
  constructor (props) {
    super(props)
    this.state = {
      chaosDepth: 0,
      timer: null
    }
  }
  
  mossify (baseString, chaosDepth) {
    return [...baseString].map(originalChar => {
      const noisyString = [...Array(chaosDepth)].reduce(noisyChar => {
        const diacritic = _.sample(UNICODE_COMBINATORIAL_DIACRITICS)
        return noisyChar + diacritic 
      }, "") + originalChar
      return noisyString
    }).join('')
  }
  
  componentDidMount () {
    const timer = setInterval(this.modulateNoise, this.props.milliseconds)
    this.setState(_=>({timer}))
  }
  
  modulateNoise = () => {
    const chaosDepth = parseInt(Math.random() * 8) + 4
    this.setState(_=>({chaosDepth}))
  }  
  
  render () {
    const baseString = "````````````````````````";
    const containerStyle = {
      fontFamily: 'Courier',
      textAlign: 'center',
      // overflowWrap: 'break-word'
    }
    return (
      <div style={containerStyle}>
        {this.mossify(baseString, this.state.chaosDepth)}
      </div>
    )
  }
}
