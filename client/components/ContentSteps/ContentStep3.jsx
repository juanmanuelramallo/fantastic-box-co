import React from 'react'
import classnames from 'classnames'

export default class ContentStep3 extends React.Component {

  backButton(){
    this.props.prevStep()
  }

  nextButton(){
    if (this.props.quality === ""){
      this.props.addNotification("You must select a print quality", "error", 301)
    } else {
      this.props.nextStep()
    }
  }

  handleQuality(event) {
    this.props.handleQuality(event.target.value)
  }

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
              <input type="radio" name="print-quality" value="3-color" checked={this.props.quality === '3-color'} onChange={this.handleQuality.bind(this)}></input>
              <span className="btn btn-radio">
                3 colours<br></br>&pound;0.20 m<sup>2</sup>
              </span>
            </label>
          </li>
          <li>
            <label>
              <input type="radio" name="print-quality" value="2-color" checked={this.props.quality === '2-color'} onChange={this.handleQuality.bind(this)}></input>
              <span className="btn btn-radio">
                2 colours<br></br>&pound;0.10 m<sup>2</sup>
              </span>
            </label>
          </li>
          <li>
            <label>
              <input type="radio" name="print-quality" value="black-only" checked={this.props.quality === 'black-only'} onChange={this.handleQuality.bind(this)}></input>
              <span className="btn btn-radio">
                Black only<br></br>&pound;0.05 m<sup>2</sup>
              </span>
            </label>
          </li>
          <li>
            <label>
              <input type="radio" name="print-quality" value="no-printing" checked={this.props.quality === 'no-printing'} onChange={this.handleQuality.bind(this)}></input>
              <span className="btn btn-radio">
                No printing<br></br>&pound;0.00
              </span>
            </label>
          </li>
          <li>
            <label>
              <input type="radio" name="print-quality" value="FantasticBoxCo-branding" checked={this.props.quality === 'FantasticBoxCo-branding'} onChange={this.handleQuality.bind(this)}></input>
              <span className="btn btn-radio">
                <strong>FantasticBoxCo</strong> branding<br></br>5% discount on total price
              </span>
            </label>
          </li>
        </ol>

        <div className="form-actions">
          <button type="button" onClick={this.backButton.bind(this)} className="btn btn-back">
            back
          </button>
          <button type="button" onClick={this.nextButton.bind(this)} className="btn btn-primary btn-next">
            Next
          </button>
        </div>
      </div>

    )
  }
}
