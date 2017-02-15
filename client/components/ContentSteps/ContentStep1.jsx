import React from 'react'

export default class ContentStep1 extends React.Component {
  constructor() {
    super()
  }

  handleClick(){
    this.props.nextStep()
  }

  render() {
    return (
      <div id="step-1" className="content-step">
        <h2>Step 1 - Dimensions &amp; Quantity</h2>

        <p className="intro">
          Enter the width, height, length and quantity of the box(es) you require.
        </p>

        <div className="form-row">
          <label htmlFor="width">Width:</label>
          <input type="number" name="width" id="width" value={this.props.width} onChange={this.props.handleChange.bind(this,"w")} min="0" step="0.01" />
        </div>

        <div className="form-row">
          <label htmlFor="height">Height:</label>
          <input type="number" name="height" id="height" value={this.props.height} onChange={this.props.handleChange.bind(this,"h")} min="0" step="0.01"></input>
        </div>

        <div className="form-row">
          <label htmlFor="length">Length:</label>
          <input type="number" name="length" id="length" value={this.props.length} onChange={this.props.handleChange.bind(this,"l")} min="0" step="0.01"></input>
        </div>

        <div className="form-row">
          <label htmlFor="quantity">Quantity:</label>
          <input type="number" name="quantity" id="quantity" value={this.props.quantity} onChange={this.props.handleChange.bind(this,"q")} min="0" step="1"></input>
        </div>

        <div className="form-actions">
          <button type="button" onClick={this.handleClick.bind(this)} className="btn btn-primary btn-next" disabled={!this.props.height || !this.props.width || !this.props.length || !this.props.quantity}>
            Next
          </button>
        </div>
      </div>
    )
  }
}
