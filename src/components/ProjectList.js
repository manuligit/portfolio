import React from 'react'
import Projects from '../projects.json'
import Course from './Course'

class ProjectList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: []
    };
  }

  addFilter = (item, event) => {
    //If filter doesn't contain the keyword, add it to current filter:
    if (this.state.filter.indexOf(item) === (-1)) {
      let newFilter = [].concat(this.state.filter)
      newFilter.push(item)
      this.setState ({ filter: newFilter })
    }
  }

  removeFilter = (k, event) => {
    if (this.state.filter.length === 1) { 
      this.setState({ filter: [] })
    } else {
      let newFilter = this.state.filter.filter(n=> n != k)
      this.setState({ filter: newFilter })
    }
  }

  render() {
    const checkFilters = () => {
      if (this.state.filter.length > 0) {
        return (
          <div className="filters">
            <h2>Filters</h2>
              {this.state.filter.map((k,i) =>
                <span className="keyword" key={i} onClick={() => this.removeFilter(k)}>{k.toUpperCase()}</span>)
              }
          <br />
          </div>
        )
    }}

    return (
      <div className="projects">
        <h1> Projects </h1>
        <div className="divider"></div>
          {checkFilters()}
          <div className="divider"></div>
          {Projects.projects.map(p => 
            <div key={p.project}> <Course project={p} filter={this.state.filter} addFilter={this.addFilter}/>
            <div className="divider"></div></div>)}
      </div>
  )}
}

export default ProjectList