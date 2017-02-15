import React from 'react'
import classnames from 'classnames'

function getGrade(g) {
  if (g != '') {
    return g
  } else {
    return '-'
  }
}

export default class Step2 extends React.Component {

  render() {
    // let classes = classnames('greet', {
    //   'good': this.props.mood === '1',
    //   'bad': this.props.mood === '0'
    // })

    return (
      <div>
        <div className="step-number">2</div>
        <h3 className="step-heading">Cardboard Grade</h3>
        <span className="step-value">{getGrade(this.props.grade)}</span>
      </div>
    )
  }
}
