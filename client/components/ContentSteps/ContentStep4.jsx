import React from 'react'

export default class ContentStep4 extends React.Component {

  backButton(){
    this.props.prevStep()
  }

  finishButton(){
    this.props.finishValidation()
  }

  toogleHandles() {
    this.props.toogleHandles()
  }

  toogleReinforced() {
    this.props.toogleReinforced()
  }

  handleReinforcedChecked() {
    console.log(" grade "+this.props.grade)
    if (this.props.grade != 'A') {
      return false
    } else {
      return this.props.reinforcedBottom
    }
  }

  render() {

    return (
      <div id="step-4" className="content-step">
        <h2>Step 4 - Optional Extras</h2>

        <ol className="btn-radios-list">
          <li>
            <label>
              <input type="checkbox" name="optional-extras" value="handles" checked={this.props.handles} onChange={this.toogleHandles.bind(this)}></input>
              <span className="btn btn-radio">
                Handles<br></br>&pound;0.10 per box
              </span>
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" name="optional-extras" value="reinforced-bottom" disabled={this.props.grade != 'A'} checked={this.props.reinforcedBottom} onChange={this.toogleReinforced.bind(this)}></input>
              <span className="btn btn-radio" disabled={this.props.grade != 'A'}>
                Reinforced bottom<br></br>&pound;0.05 per box<br></br>
              {this.props.grade != 'A' && <small>(only available with grade A cardboard)</small> }
              </span>
            </label>
          </li>
        </ol>

        <div className="form-actions">
          <button type="button" onClick={this.backButton.bind(this)}  className="btn btn-back">
            back
          </button>
          <button type="button" onClick={this.finishButton.bind(this)} className="btn btn-primary btn-next">
            Finish
          </button>
        </div>
      </div>

    )
  }
}
