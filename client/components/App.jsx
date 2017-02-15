import React from 'react'
import TopHeader from './TopHeader.jsx'
import Steps from './Steps/Steps.jsx'
import ContentStep1 from './ContentSteps/ContentStep1.jsx'
import ContentStep2 from './ContentSteps/ContentStep2.jsx'
import ContentStep3 from './ContentSteps/ContentStep3.jsx'
import ContentStep4 from './ContentSteps/ContentStep4.jsx'
import TotalCostContent from './ContentSteps/TotalCostContent.jsx'
import NotificationSystem from 'react-notification-system'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      step: 1,
      width: 0,
      height: 0,
      length: 0,
      quantity: 0,
      grade: '',
      quality: '',
      handles: false,
      reinforcedBottom: false
    }
  }

  _notificationSystem: null

  _addNotification(msg, type, id) {
    // event.preventDefault()
    this._notificationSystem.addNotification({
      message: msg,
      level: type,
      position: "tc",
      autoDismiss: 5,
      uid: id
    })
  }

  _addNotificationWithChildren(ch, type, id) {
    // event.preventDefault()
    this._notificationSystem.addNotification({
      children: ch,
      level: type,
      position: "tc",
      autoDismiss: 5,
      uid: id
    })
  }

  componentDidMount() {
    this._notificationSystem = this.refs.notificationSystem
  }

  nextStep() {
    if (this.state.step < 5) {
      this.setState({
        step: this.state.step+1
      })
    }
  }

  prevStep() {
    if (this.state.step > 1) {
      this.setState({
        step: this.state.step-1
      })
    }
  }

  goToStep(s) {
    if (s >= 1 && s <= 5) {
      this.setState({
        step: s
      })
    }
  }

  finishValidation(event) {
    let msg = ''
    if (this.state.quality === "") {
      msg = "Go to step 3 and select a print quality"
      this._addNotification(msg, "error", 1)
    }
    if (this.state.grade === "") {
      msg = "Go to step 2 and select the cardboard grade for your needs."
      this._addNotification(msg, "error", 2)
    }
    if (this.state.width === 0 || this.state.height == 0 || this.state.length == 0 || this.state.quantity === 0) {
      msg = "Go to step 1 and complete all fields"
      this._addNotification(msg, "error", 3)
    }

    if (!(this.state.width === 0 || this.state.height == 0 || this.state.length == 0 || this.state.quantity === 0 || this.state.grade === "" || this.state.quality === ""))
      this.nextStep()
  }

  handleChange(mod, event) {
    let val = parseFloat(event.target.value)
    if (mod === "w")
      this.setState({width: val})
    else if (mod === "h")
      this.setState({height: val})
    else if (mod === "l")
      this.setState({length: val})
    else if (mod === "q") {
      val = parseInt(val)
      this.setState({quantity: val})
    }

    if (this.calculateArea() > 2) {
      if (this.state.grade === 'C') {
        this.setState({ grade: "" })
        this._addNotificationWithChildren(<span>Grade C is only available for boxes smaller than 2m<sup>2</sup></span>, "warning", 4)
      }
    }
    console.log("Area "+this.calculateArea())
  }

  handleGrade(newGrade) {
    this.setState({ grade: newGrade})
    if ( newGrade != 'A') {
      if (this.state.reinforcedBottom) {
        this.setState({ reinforcedBottom: false })
        this._addNotification("Reinforced bottom is only available with grade A cardboard", "warning", 5)
      }
    }
  }

  handleQuality(newQuality) {
    this.setState({ quality: newQuality})
  }

  toogleHandles() {
    this.setState({ handles: !this.state.handles })
  }

  toogleReinforced() {
    this.setState({ reinforcedBottom: !this.state.reinforcedBottom })
  }

  calculateArea() {
    let area = ((this.state.height *  this.state.width)*2) + ((this.state.width * this.state.length)*2) + ((this.state.height * this.state.length)*2)
    return area
  }

  calculateCost() {
    let area = this.calculateArea()

    // Calculate cost with grade
    let gradeCost = 0
    switch (this.state.grade) {
      case "A":
        gradeCost = area * 0.20
        break;
      case "B":
        gradeCost = area * 0.10
        break;
      case "C":
        gradeCost = area * 0.05
        break;
      default:
        gradeCost = 0
        break;
    }
    gradeCost = gradeCost * this.state.quantity
    //console.log("GradeCost "+gradeCost+ " area "+area)

    // Extras cost
    let extrasCost = 0
    if (this.state.handles) {
      extrasCost = 0.10 * this.state.quantity
    }
    if (this.state.reinforcedBottom) {
      extrasCost = extrasCost + (0.05 * this.state.quantity)
    }
    //console.log("ExtrasCost "+extrasCost)

    let totalCost = gradeCost + extrasCost
    //console.log("Partial Total Cost"+totalCost)

    // Calculate cost with quality
    let qualityCost = 0
    switch (this.state.quality) {
      case '3-color':
        qualityCost = area * 0.20 * this.state.quantity
        break;
      case '2-color':
        qualityCost = area * 0.10 * this.state.quantity
        break;
      case 'black-only':
        qualityCost = area * 0.05 * this.state.quantity
        break;
      case 'no-printing':
        qualityCost = 0
        break;
      case 'FantasticBoxCo-branding':
        qualityCost = -(0.05 * totalCost)
        break;
      default:
        qualityCost = 0;
        break;
    }
    //console.log("QualityCost "+qualityCost)

    totalCost = totalCost + qualityCost
    //console.log("Total Cost "+totalCost)

    return totalCost
  }

  render() {


    return (
      <div>
        <TopHeader />
        <main>
          <div className="container">
            <Steps
                {...this.state}
                nextStep={this.nextStep.bind(this)}
                goToStep={this.goToStep.bind(this)}
                calculateCost={this.calculateCost.bind(this)}
                finishValidation={this.finishValidation.bind(this)}
            />
            <section>
                {this.state.step === 1 &&
                  <ContentStep1
                    {...this.state}
                    nextStep={this.nextStep.bind(this)}
                    handleChange={this.handleChange.bind(this)}
                  />
                }
                {this.state.step === 2 &&
                  <ContentStep2
                    grade={this.state.grade}
                    nextStep={this.nextStep.bind(this)}
                    prevStep={this.prevStep.bind(this)}
                    handleGrade={this.handleGrade.bind(this)}
                    calculateArea={this.calculateArea.bind(this)}
                    addNotification={this._addNotification.bind(this)}
                  />
                }
                {this.state.step === 3 &&
                  <ContentStep3
                    quality={this.state.quality}
                    nextStep={this.nextStep.bind(this)}
                    prevStep={this.prevStep.bind(this)}
                    handleQuality={this.handleQuality.bind(this)}
                    addNotification={this._addNotification.bind(this)}
                  />
                }
                {this.state.step === 4 &&
                  <ContentStep4
                    handles={this.state.handles}
                    reinforcedBottom={this.state.reinforcedBottom}
                    grade={this.state.grade}
                    finishValidation={this.finishValidation.bind(this)}
                    prevStep={this.prevStep.bind(this)}
                    toogleHandles={this.toogleHandles.bind(this)}
                    toogleReinforced={this.toogleReinforced.bind(this)}
                  />
                }
                {this.state.step === 5 &&
                  <TotalCostContent
                    {...this.state}
                    calculateArea={this.calculateArea.bind(this)}
                    calculateCost={this.calculateCost.bind(this)}
                  />
                }
                <NotificationSystem ref="notificationSystem" />
            </section>
          </div>
        </main>
      </div>
    )
  }
}
