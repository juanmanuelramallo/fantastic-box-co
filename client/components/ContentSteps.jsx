import React from 'react'
import classnames from 'classnames'

import ContentStep1 from './ContentStep1.jsx'
import ContentStep2 from './ContentStep2.jsx'
import ContentStep3 from './ContentStep3.jsx'
import ContentStep4 from './ContentStep4.jsx'
import TotalCostContent from './TotalCostContent.jsx'

export default class ContentSteps extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section>
          {this.props.activeStep === 1 &&
            <ContentStep1
              handleClick={this.props.handleClick.bind(this)}
              handleChange={this.props.handleChange.bind(this)}
              width={this.props.width}
              height={this.props.height}
              length={this.props.length}
              quantity={this.props.quantity}/>
          }
          {this.props.activeStep === 2 &&
            <ContentStep2 handleClick={this.props.handleClick.bind(this)}/>
          }
          {this.props.activeStep === 3 &&
            <ContentStep3 handleClick={this.props.handleClick.bind(this)}/>
          }
          {this.props.activeStep === 4 &&
            <ContentStep4 handleClick={this.props.handleClick.bind(this)}/>
          }
          {this.props.activeStep === 5 &&
            <TotalCostContent handleClick={this.props.handleClick.bind(this)}/>
          }
      </section>

    )
  }
}
