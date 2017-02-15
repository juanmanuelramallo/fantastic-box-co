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
            <ContentStep1 />
          }
          {this.props.activeStep === 2 &&
            <ContentStep2 />
          }
          {this.props.activeStep === 3 &&
            <ContentStep3 />
          }
          {this.props.activeStep === 4 &&
            <ContentStep4 />
          }
          {this.props.activeStep === 5 &&
            <TotalCostContent />
          }
      </section>

    )
  }
}
