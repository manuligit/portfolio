import React from 'react'

class Course extends React.Component {
  
  render() {
    let { filter, project } = this.props;

    if (filter.length > 0) {
      let words = project.keywords.filter(n => {
        //console.log(filter.indexOf((n)))
        return filter.indexOf((n)) !== -1;
      })

      if (words.length !== filter.length) {
        return (<div style={{display: 'none'}}></div>)
      }
     }

    return (
      <div className="course">
        <div className="leftBlock">
          <div className="project">{project.project}</div>
          <div className="keywords">{project.keywords && project.keywords.map((k,i) => 
              <span className="keyword" key={i} onClick={() => this.props.addFilter(k)}>{k.toUpperCase()}</span>)}
          </div>
        </div>
        <div className="rightBlock">
          <div className="description"><p>{project.description}</p></div>
          {project.link && <div className="link"><a href={project.link}>Github</a></div>}
          {project.extra && <div className="extra"><a href={project.extra}>More info</a></div>}
          <div className="year">{project.year}</div>
        </div>
      </div>
  )}

}

export default Course