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

  render() {
    var class1 = classnames('step', 'step-1', { 'is-active': this.props.activeStep === 1})
    var class2 = classnames('step', 'step-2', { 'is-active': this.props.activeStep === 2})
    var class3 = classnames('step', 'step-3', { 'is-active': this.props.activeStep === 3})
    var class4 = classnames('step', 'step-4', { 'is-active': this.props.activeStep === 4})
    var classTotalCost = classnames('step', 'step-total-cost', { 'is-active': this.props.activeStep === 5})

    // console.log('state steps '+ this.state.activeStep)

    return (
      <aside>
        <ul className="progress">
          <li>
            <a href="#step-1" onClick={this.props.handleClick.bind(this, 1)} className={class1}>
              <Step1 />
            </a>
          </li>
          <li>
            <a href="#step-2" onClick={this.props.handleClick.bind(this, 2)} className={class2}>
              <Step2 />
            </a>
          </li>
          <li>
            <a href="#step-3" onClick={this.props.handleClick.bind(this, 3)} className={class3}>
              <Step3 />
            </a>
          </li>
          <li>
            <a href="#step-4" onClick={this.props.handleClick.bind(this, 4)} className={class4}>
              <Step4 />
            </a>
          </li>
          <li>
            <a href="#total-cost" onClick={this.props.handleClick.bind(this, 5)} className={classTotalCost}>
              <StepTotalCost />
            </a>
          </li>
        </ul>
      </aside>
    )
  }
}
