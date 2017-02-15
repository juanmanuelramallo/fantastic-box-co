import React from 'react'
import classnames from 'classnames'

function getExtras(h,r) {
  if (h != false && r != false)
    return ( 'Handles, reinforced bottom' )
  else if (h != false) {
    return ( 'Handles')
  }
  else if (r != false) {
    return ( 'Reinforced bottom')
  } else {
    return ( '-')
  }
}

export default class Step4 extends React.Component {

  render() {
    // let classes = classnames('greet', {
    //   'good': this.props.mood === '1',
    //   'bad': this.props.mood === '0'
    // })

    return (
      <div>
        <div className="step-number">4</div>
        <h3 className="step-heading">Optional Extras</h3>
        <span className="step-value">{getExtras(this.props.handles, this.props.reinforcedBottom)}</span>
      </div>
    )
  }
}
