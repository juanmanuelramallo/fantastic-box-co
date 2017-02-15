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
          <dd>0.0m</dd>
          <dt>Height:</dt>
          <dd>0.0m</dd>
          <dt>Length:</dt>
          <dd>0.0m</dd>
          <dt>Quantity:</dt>
          <dd>0</dd>
        </dl>
      </div>
    )
  }
}
