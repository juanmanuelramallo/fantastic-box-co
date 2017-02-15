import React from 'react'
import TopHeader from './TopHeader.jsx'
import Steps from './Steps.jsx'
import ContentSteps from './ContentSteps.jsx'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      activeStep: 1,
      width: 0,
      height: 0,
      length: 0,
      quantity: 0
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleClick(stepNumber){
    // console.log(stepNumber)
    this.setState({activeStep: stepNumber})
    // console.log("STATE "+this.state.activeStep)
  }

  handleChange(mod, event) {
    if (mod === "w")
      this.setState({width: event.target.value})
    else if (mod === "h")
      this.setState({height: event.target.value})
    else if (mod === "l")
      this.setState({length: event.target.value})
    else if (mod === "q")
      this.setState({quantity: event.target.value})

    // console.log("State "+this.state.height)
  }

  render() {
    return (
      <div>
        <TopHeader />
        <main>
          <div className="container">
            <Steps handleClick={this.handleClick.bind(this)} activeStep={this.state.activeStep}/>
            <ContentSteps
              handleClick={this.handleClick.bind(this)}
              activeStep={this.state.activeStep}
              handleChange={this.handleChange}
              width={this.state.width}
              height={this.state.height}
              length={this.state.length}
              quantity={this.state.quantity}
              />
          </div>
        </main>
      </div>
    )
  }
}
