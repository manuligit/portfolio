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

  render() {
    return (
      <div className="projects">
        <h1> Projects </h1>
        <div className="divider"></div>
          {Projects.projects.map(p => 
            <div key={p.project}> <Course project={p} />
            <div className="divider"></div></div>)}
      </div>
  )}

}

export default Project