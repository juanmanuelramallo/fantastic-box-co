import React from 'react'
import classnames from 'classnames'

export default class Greeter extends React.Component {
  render() {
    let classes = classnames('greet', {
      'good': this.props.mood === '1',
      'bad': this.props.mood === '0'
    })

    return (
      <div className={classes}>
        <h1>Hello worldy! {this.props.mood}</h1>
      </div>
    )
  }
}
