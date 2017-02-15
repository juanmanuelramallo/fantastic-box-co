import React from 'react'
import classnames from 'classnames'

export default class Step1 extends React.Component {
  constructor(props){
    super(props)
  }
  render() {

    return (
      <div>
        <div className="step-number">1</div>
        <h3 className="step-heading">Dimensions &amp; Quantity</h3>
        <dl>
          <dt>Width:</dt>
          <dd>{this.props.width}m</dd>
          <dt>Height:</dt>
          <dd>{this.props.height}m</dd>
          <dt>Length:</dt>
          <dd>{this.props.length}m</dd>
          <dt>Quantity:</dt>
          <dd>{this.props.quantity}</dd>
        </dl>
      </div>
    )
  }
}
