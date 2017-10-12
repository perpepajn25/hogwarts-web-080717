import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import Hogs from '../porkers_data.js'
import HogsContainer from './HogsContainer.js'
import Filter from './Filter.js'

class App extends Component {
  state = {
    hogs: Hogs,
    filteredHogs: Hogs
    }

  handleGrease = (value) => {
      switch(value){
        case "both":
        this.setState({
          filteredHogs: this.state.hogs
        })
        break;
        case "greased":
          this.setState({
            filteredHogs: this.state.hogs.filter(hog =>{
              return hog.greased === true
            })
          })
        break;
        case "not-greased":
          this.setState({
            filteredHogs: this.state.hogs.filter(hog =>{
              return hog.greased === false
            })
          })
        break;
      }
    }

  handleSort = (value,className) => {
    const sortedHogs = () => {
        if (value === "ascending"){
          return this.state.filteredHogs.sort((a,b) => {
            if (a[className] > b[className]){
              return -1
            } else if (a[className] < b[className]){
              return 1
            }
          })
        }
        else {
          return this.state.filteredHogs.sort((a,b) => {
            if (a[className] < b[className]){
              return 1
            } else if (a[className] > b[className]){
              return -1
            }
          })
        }
    }
    this.setState({
      filteredHogs: sortedHogs()
    })
  }

  render() {
    return (
      <div className="App">
          < Nav />
          < Filter onSortChange={this.handleSort} handleGrease={this.handleGrease}/><br></br>
          < HogsContainer hogs={this.state.filteredHogs}/>
      </div>
    )
  }
}

export default App;
