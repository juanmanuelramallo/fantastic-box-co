import React from 'react'
import classnames from 'classnames'

function getQuality(q) {
  switch (q) {
    case '3-color':
      return '3 colours'
      break;
    case '2-color':
      return '2 colours'
      break;
    case 'no-printing':
      return 'No printing'
      break;
    case 'black-only':
      return 'Black only'
      break;
    case 'FantasticBoxCo-branding':
      return 'FantasticBoxCo branding'
      break;
    default:
      return '-'
  }
}

export default class Step3 extends React.Component {
  render() {

    return (
      <div>
        <div className="step-number">3</div>
        <h3 className="step-heading">Print Quality</h3>
        <span className="step-value">{getQuality(this.props.quality)}</span>
      </div>
    )
  }
}
