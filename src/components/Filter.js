import React from "react"

export default class Filter extends React.Component{

  handleSortChange = (event) => {
    this.props.onSortChange(event.target.value, event.target[event.target.selectedIndex].className)
  }
  handleFilterChange = (event) => {
    this.props.handleGrease(event.target.value)
  }

  render(){
    return(
      <div className="filters">
        <div className="sort">
          <select onChange={this.handleSortChange}>
            <option disabled="true" selected="select">--</option>
            <option className="name" value="ascending">A-Z</option>
            <option className="name" value="descending">Z-A</option>
            <option className="weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water" value="ascending">Lightest-Heaviest</option>
            <option className="weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water" value="descending">Heaviest-Lightest</option>
          </select>
        </div>
        <div className="greased-sort">
          <select onChange={this.handleFilterChange}>
            <option value="both">Both</option>
            <option value="greased">Greased</option>
            <option value="not-greased">Not Greased</option>
          </select>
        </div>
  </div>
    )
  }
}
