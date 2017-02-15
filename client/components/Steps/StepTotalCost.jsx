import React from 'react'
// import classnames from 'classnames'

export default class StepTotalCost extends React.Component {
  render() {

    return (
      <div>
        <h3 className="step-total-cost-heading">Total Cost</h3>
        <div className="step-total-cost-value">&pound;{this.props.calculateCost().toFixed(2)}</div>
      </div>
  )
  }
}
