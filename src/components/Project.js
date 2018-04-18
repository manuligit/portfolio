import React from 'react'
import Projects from '../projects.json'
import Course from './Course'

class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: []
    };
  }

  addFilter = (k, event) => {
    console.log(k)
    let newFilter = [].concat(this.state.filter)
    newFilter.push(k)
    this.setState ({ filter: newFilter })
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
            <h1> Filters </h1>
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

export default Project