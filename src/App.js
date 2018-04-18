import React, { Component } from 'react'
import './App.css'
import Project from './components/Project'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tools: [],
      future: [],
      skills: []
    };
  }

  componentDidMount() {
    const tools = ["Full Stack", "React", "Javascript", "Node", "Snibedi snab"];
    const future = ["Full Stack", "React", "Javascript", "My Little Front End: CSS is Magic", "FUNctional Programming"];
    const skills = ["No skills", "To pay the bills", "But I have 5 FLB", "Chev Swords", ";____;"];
    this.setState({ tools: tools, future: future, skills: skills })
  }

  render() {

    return (
      <div className="App">
        <div className="header">
          <p><b>Hi.</b></p>
          <p>This is a short header.</p>
          <p>My name is <span className="hilight">Kari Kuusisaari.</span></p>
          <p>I'm from <span className="hilight">Sääksjärvi, Lempäälä.</span></p>
        </div>
        <h1>Summary</h1>
        <div className="divider"></div>
        <div className="summary">
          <div className="summary1">
            <span className="summaryh">Current tools</span>
            {this.state.tools && <ul>{this.state.tools.map(t => <li key={t}>{t}</li>)}
            </ul>}
          </div>
          <div className="summary2">
            <span className="summaryh">Future</span>
            {this.state.future && <ul>{this.state.future.map(t => <li key={t}>{t}</li>)}
              </ul>}
          </div>
          <div className="summary3">
            <span className="summaryh">Skills</span>
            {this.state.skills && <ul>{this.state.skills.map(t => <li key={t}>{t}</li>)}
              </ul>}
          </div>
        </div>
        <Project />
      </div>
    );
  }
}

export default App;