import React from 'react'

class Course extends React.Component {

  render() { 
    return (
      <div className="course">
        <div className="leftBlock">
          <div className="project">{this.props.project.project}</div>
          <div className="keywords">{this.props.project.keywords && this.props.project.keywords.map((k,i) => <span className="keyword" key={i}>{k.toUpperCase()}</span>)}</div>
        </div>
        <div className="rightBlock">
          <div className="description"><p>{this.props.project.description}</p></div>
          {this.props.project.link && <div className="link"><a href={this.props.project.link}>Github</a></div>}
          {this.props.project.extra && <div className="extra"><a href={this.props.project.extra}>More info</a></div>}
          <div className="year">{this.props.project.year}</div>
        </div>
      </div>
  )}

}

export default Course