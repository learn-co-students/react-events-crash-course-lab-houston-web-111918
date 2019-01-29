import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {
  
  // constructor() {
  //   super()
  //   this.state = {
  //     x: 0,
  //     y: 0
  //   }
  // }

  handleMouseMove = (event) => {

  //  this.setState({
  //     x: event.pageX,
  //     y: event.pageY
  //     })
    
   // WINDOW = clientX; DOCUMENT = pageX
   drawChromeBoiAtCoords(event.clientX,event.clientY)
  
  }
  
 
  
   type = (e) => {
    if(e.key == 'a'){
      
      return resize('+')
    }
    else if(e.key == 's'){
      return resize('-')
    }
    
   }

  render() {
    
    // const {x,y} = this.state
    return (
      
      <canvas 
      onClick={toggleCycling()}
      onKeyDown={this.type}
        onMouseMove={this.handleMouseMove}
        
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
