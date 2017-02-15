import React from 'react'
import classnames from 'classnames'

export default class ContentStep2 extends React.Component {
  render() {

    return (
      <div id="step-2" className="content-step">
        <h2>Step 2 - Cardboard Grade</h2>

        <p className="intro">
          <strong>FantasticBoxCo</strong> offer a variety of grades of cardboard, each altering the price per m<sup>2</sup>:
​          </p>

        <ol className="btn-radios-list">
          <li>
            <label>
              <input type="radio" name="cardboard-grade" value="A"></input>
              <span className="btn btn-radio">
                A Grade<br></br>&pound;0.20 m<sup>2</sup>
              </span>
            </label>
          </li>
          <li>
            <label>
              <input type="radio" name="cardboard-grade" value="B"></input>
              <span className="btn btn-radio">
                B Grade<br></br>&pound;0.10 m<sup>2</sup>
              </span>
            </label>
          </li>
          <li>
            <label>
              <input type="radio" name="cardboard-grade" value="C"></input>
              <span className="btn btn-radio">
                C Grade<br></br>&pound;0.05 m<sup>2</sup>
              </span>
            </label>
          </li>
        </ol>

        <div className="form-actions">
          <button type="button" onClick={this.props.handleClick.bind(this,1)} className="btn btn-back">
            back
          </button>
          <button type="button" onClick={this.props.handleClick.bind(this,3)} className="btn btn-primary btn-next">
            Next
          </button>
        </div>
      </div>

    )
  }
}
