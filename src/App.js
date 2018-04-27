import React, { Component } from 'react'
import './App.css'
import ProjectList from './components/ProjectList'
import Summary from './components/Summary'
import Projects from './projects.json'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tools: [],
      future: [],
      skills: [],
      name: '',
      location: ''
    };
  }

  componentDidMount() {
    //Read items from JSON:
    let tools = Projects.tools
    let future = Projects.future
    let skills = Projects.skills
    let name = Projects.profile.name
    let location = Projects.profile.location
    this.setState({ tools: tools, future: future, skills: skills, name: name, location: location })
  }

  render() {

    return (
      <div className="App">
        <header>
          <p><strong>Hi.</strong></p>
          <p>This is a short header.</p>
          <p>My name is <span className="hilight">{this.state.name}.</span></p>
          <p>I'm from <span className="hilight">{this.state.location}.</span></p>
        </header>
        <Summary tools={this.state.tools} future={this.state.future} skills={this.state.skills}/>
        <ProjectList />
      </div>
    );
  }
}

export default App;