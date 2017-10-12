import React, { Component } from 'react';
import '../App.css';
import 'semantic-ui-css/semantic.min.css'

class Hog extends Component {
  state = {
    displayDescription: false
  }

  imgReformat = () => {
    return this.props.hog.name.toLowerCase().replace(/\s/g, "_")

  }

  handleClick = () => {
    this.setState({
      displayDescription: !this.state.displayDescription
    })
  }

  render() {
    return (
      <div className="ui card" onClick={this.handleClick} >
        <div className="image">
            <img src={require(`../hog-imgs/${this.imgReformat()}.jpg`)}/>
        </div>
        <div className="content">
          <a className="header">{this.props.hog.name}</a>
          <div className="meta">
            <span className="specialty">{this.props.hog.specialty}</span>
          </div>
            { !this.state.displayDescription ? <div>...</div> :
            <div className="description">
              <p>{this.props.hog["highest medal achieved"]}</p>
              <p>{this.props.hog["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"]}</p>
            </div>
            }
        </div>
        <div className="extra content">
            {this.props.hog.greased ? "This hog is greased" : "This hog is not greased"}
        </div>
      </div>
    )
  }
}

export default Hog;
