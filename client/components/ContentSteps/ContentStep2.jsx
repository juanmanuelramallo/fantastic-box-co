import React from 'react'

export default class ContentStep2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cDisabled : (this.props.calculateArea() > 2)
    }
  }

  componentWillMount() {
    this.setState({ cDisabled: (this.props.calculateArea() > 2 )})
  }

  backButton(){
    this.props.prevStep()
  }

  nextButton(){
    console.log(this._notificationIndex)
    if (this.props.grade === "") {
      this.props.addNotification("You must select a grade", "error", 201)
    } else {
      this.props.nextStep()
    }
  }

  handleGrade(event) {
    this.props.handleGrade(event.target.value)
  }

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
              <input type="radio" name="cardboard-grade" value="A" checked={this.props.grade === 'A'} onChange={this.handleGrade.bind(this)}></input>
              <span className="btn btn-radio">
                A Grade<br></br>&pound;0.20 m<sup>2</sup>
              </span>
            </label>
          </li>
          <li>
            <label>
              <input type="radio" name="cardboard-grade" value="B" checked={this.props.grade === 'B'} onChange={this.handleGrade.bind(this)}></input>
              <span className="btn btn-radio">
                B Grade<br></br>&pound;0.10 m<sup>2</sup>
              </span>
            </label>
          </li>
          <li>
            <label>
              <input type="radio" name="cardboard-grade" value="C" disabled={this.state.cDisabled} checked={this.props.grade === 'C'} onChange={this.handleGrade.bind(this)}></input>
              <span className="btn btn-radio" disabled={this.state.cDisabled}>
                C Grade<br></br>&pound;0.05 m<sup>2</sup><br></br>
              { this.state.cDisabled &&
                <small>available for boxes smaller than 2m<sup>2</sup>, your box has {this.props.calculateArea()}m<sup>2</sup></small>
              }
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
