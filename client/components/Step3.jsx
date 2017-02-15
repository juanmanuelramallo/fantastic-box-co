import React from 'react'
import classnames from 'classnames'

export default class Step3 extends React.Component {
  render() {
    // let classes = classnames('greet', {
    //   'good': this.props.mood === '1',
    //   'bad': this.props.mood === '0'
    // })

    return (
      <div>
        <div className="step-number">3</div>
        <h3 className="step-heading">Print Quality</h3>
        <span className="step-value">-</span>
      </div>
    )
  }
}
