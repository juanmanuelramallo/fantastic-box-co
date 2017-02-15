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

export default class TotalCostContent extends React.Component {

  render() {

    return (
      <div id="total-cost" className="content-step">
        <h2>Total Cost</h2>

        <dl className="breakdown">
          <dt>Dimensions &amp; Quantity:</dt>
          <dd>{this.props.quantity} &times; {this.props.width}(W)&times;{this.props.height}(H)&times;{this.props.length}(L)</dd>

          <dt>Cardboard Grade:</dt>
          <dd>{this.props.grade} grade</dd>

          <dt>Print Quality:</dt>
          <dd>{getQuality(this.props.quality)}</dd>

          <dt>Optional Extras:</dt>
          <dd>
            <ol>
              {this.props.handles &&
                <li>Handles</li>
              }
              {this.props.reinforcedBottom &&
                <li>Reinforced bottoms</li>
              }
            </ol>
          </dd>

          <dt>Total Cost:</dt>
          <dd>&pound;{this.props.calculateCost().toFixed(2)}</dd>
        </dl>
      </div>

    )
  }
}
