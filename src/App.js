import React, { Component } from 'react'
import './App.css'
import ProjectList from './components/ProjectList'
import Summary from './components/Summary'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      json: [],
      error: '',
      loaded: false,
    };
  }

  async componentDidMount() {
    // Read info from JSON:
    this.getURL().then(res => (
      console.log('res', res),
      this.setState({ json: res, loaded: true })));
  }

  // Get the info from remote gist url
  getURL = () => {
    return fetch('https://api.github.com/gists/3c21ffc34b523164d800b87a291d7c4f', { mode: "cors"})
    .then((response) => {
      return response.json()})
    .then((responseJson) => {
      return JSON.parse(responseJson.files["projects.json"].content);
    })
    .catch((error) => {
      //console.error(error);
      this.setState({ error: error });
    });
 }

  render() {
    const { loaded, json } = this.state;
    let content;
    if (loaded) { 
      content = (
      <div className="App">
        <header>
          <p><strong>Hi.</strong></p>
          <p>My name is <span className="hilight">{json.profile.name}.</span></p>
          <p>I'm from <span className="hilight">{json.profile.location}.</span></p>
          <p>Here's my <a href={`http://www.github.com/${json.profile.github}`}>github. </a></p>
        </header>
        <Summary tools={json.tools} future={json.future} skills={json.skills}/>
        <ProjectList projects={json.projects}/>
      </div>)
    } else {
      content = (<div className="lds-dual-ring"></div>)
    }
    return (
      <div>
        {content}
      </div>
    )
  }
}

export default App;