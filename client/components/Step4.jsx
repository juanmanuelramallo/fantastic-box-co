import React from 'react'
import classnames from 'classnames'

export default class Step4 extends React.Component {
  render() {
    // let classes = classnames('greet', {
    //   'good': this.props.mood === '1',
    //   'bad': this.props.mood === '0'
    // })

    return (
      <div>
        <div className="step-number">4</div>
        <h3 className="step-heading">Optional Extras</h3>
        <span className="step-value">-</span>
      </div>
    )
  }
}
