import React from 'react'
import classnames from 'classnames'

export default class ContentStep3 extends React.Component {
  render() {

    return (
      <div id="step-3" className="content-step">
        <h2>Step 3 - Print Quality</h2>

        <p className="intro">
          A variety of printing options are available for any branding / logos which are required:
        </p>

        <ol className="btn-radios-list">
          <li>
            <label>
              <input type="radio" name="print-quality" value="3-color"></input>
              <span className="btn btn-radio">
                3 colours<br></br>&pound;0.20 m<sup>2</sup>
              </span>
            </label>
          </li>
          <li>
            <label>
              <input type="radio" name="print-quality" value="2-color"></input>
              <span className="btn btn-radio">
                2 colours<br></br>&pound;0.10 m<sup>2</sup>
              </span>
            </label>
          </li>
          <li>
            <label>
              <input type="radio" name="print-quality" value="black-only"></input>
              <span className="btn btn-radio">
                Black only<br></br>&pound;0.05 m<sup>2</sup>
              </span>
            </label>
          </li>
          <li>
            <label>
              <input type="radio" name="print-quality" value="no-printing"></input>
              <span className="btn btn-radio">
                No printing<br></br>&pound;0.00
              </span>
            </label>
          </li>
          <li>
            <label>
              <input type="radio" name="print-quality" value="FantasticBoxCo-branding"></input>
              <span className="btn btn-radio">
                <strong>FantasticBoxCo</strong> branding<br></br>5% discount on total price
              </span>
            </label>
          </li>
        </ol>

        <div className="form-actions">
          <button type="button" onClick={this.props.handleClick.bind(this,2)} className="btn btn-back">
            back
          </button>
          <button type="button" onClick={this.props.handleClick.bind(this,4)} className="btn btn-primary btn-next">
            Next
          </button>
        </div>
      </div>

    )
  }
}
