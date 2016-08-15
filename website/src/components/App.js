import React from 'react'
import NavLinks from './NavLinks'

export default React.createClass({
  render() {
    return (
      <div>
        <h1>React JS</h1>
        <NavLinks/>
        {this.props.children}
      </div>
    )
  }
})