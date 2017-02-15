import React from 'react'
// import classnames from 'classnames'

export default class StepTotalCost extends React.Component {
  render() {
    // let classes = classnames('greet', {
    //   'good': this.props.mood === '1',
    //   'bad': this.props.mood === '0'
    // })

    return (
      <div>
        <h3 className="step-total-cost-heading">Total Cost</h3>
        <div className="step-total-cost-value">&pound;0.00</div>
      </div>
  )
  }
}
