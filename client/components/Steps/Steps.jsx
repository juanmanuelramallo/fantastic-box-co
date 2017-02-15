import React from 'react'
import classnames from 'classnames'
import Step1 from './Step1.jsx'
import Step2 from './Step2.jsx'
import Step3 from './Step3.jsx'
import Step4 from './Step4.jsx'
import StepTotalCost from './StepTotalCost.jsx'

export default class Steps extends React.Component {
  constructor(props) {
    super(props)
  }

  handleClick(stepNumber){
    if (stepNumber === 5){
      this.props.finishValidation()
    } else {
      this.props.goToStep(stepNumber)
    }
  }

  render() {
    var class1 = classnames('step', 'step-1', { 'is-active': this.props.step === 1})
    var class2 = classnames('step', 'step-2', { 'is-active': this.props.step === 2})
    var class3 = classnames('step', 'step-3', { 'is-active': this.props.step === 3})
    var class4 = classnames('step', 'step-4', { 'is-active': this.props.step === 4})
    var classTotalCost = classnames('step', 'step-total-cost')

    // console.log('state steps '+ this.state.activeStep)

    return (
      <aside>
        <ul className="progress">
          <li>
            <a href="#step-1" onClick={this.handleClick.bind(this, 1)} className={class1}>
              <Step1 width={this.props.width} height={this.props.height} length={this.props.length} quantity={this.props.quantity}/>
            </a>
          </li>
          <li>
            <a href="#step-2" onClick={this.handleClick.bind(this, 2)} className={class2}>
              <Step2 grade={this.props.grade}/>
            </a>
          </li>
          <li>
            <a href="#step-3" onClick={this.handleClick.bind(this, 3)} className={class3}>
              <Step3 quality={this.props.quality}/>
            </a>
          </li>
          <li>
            <a href="#step-4" onClick={this.handleClick.bind(this, 4)} className={class4}>
              <Step4 handles={this.props.handles} reinforcedBottom={this.props.reinforcedBottom}/>
            </a>
          </li>
          <li>
            <a href="#total-cost" onClick={this.handleClick.bind(this, 5)} className={classTotalCost}>
              <StepTotalCost calculateCost={this.props.calculateCost.bind(this)}/>
            </a>
          </li>
        </ul>
      </aside>
    )
  }
}
