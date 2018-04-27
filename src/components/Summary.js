import React from 'react'

const Summary = ({ tools, future, skills }) => {

return (
  <section>
          <h1>Summary</h1>
          <div className="divider"></div>
          <div className="summary">
            <div className="summary1">
              <span className="summaryh">Current tools</span>
                {tools && <ul>{tools.map(t => <li key={t}>{t}</li>)}
                </ul>}
            </div>
            <div className="summary2">
              <span className="summaryh">Future</span>
              {future && <ul>{future.map(t => <li key={t}>{t}</li>)}
                </ul>}
            </div>
            <div className="summary3">
              <span className="summaryh">Skills</span>
              {skills && <ul>{skills.map(t => <li key={t}>{t}</li>)}
                </ul>}
            </div>
          </div>
  </section>
)
}

export default Summary