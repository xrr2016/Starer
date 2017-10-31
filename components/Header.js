import React, { Component } from 'react'

class Header extends Component {
  render () {
    return (
      <header>
        header
        <style jsx>{`
          header {
            color: #fff;
            height: 56px;
            background: #24c6dc;
            background: -webkit-linear-gradient(to right, #514a9d, #24c6dc);
            background: linear-gradient(to right, #514a9d, #24c6dc);
          }
        `}</style>
      </header>
    )
  }
}

export default Header
