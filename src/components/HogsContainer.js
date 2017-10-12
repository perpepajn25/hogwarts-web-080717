import React, { Component } from 'react';
import '../App.css';
import Hog from './Hog.js'

class HogsContainer extends Component {

  render() {
    const hogsCards = this.props.hogs.map((hog,index) => {
      
      return <Hog key={index} hog={hog}/>
    })
    return (
      <div className="ui cards">
      {hogsCards}
      </div>
    )
  }
}

export default HogsContainer;
