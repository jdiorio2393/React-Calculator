import React, { Component } from 'react';

class Input extends Component {
  render() {
    return <div className='calculator-screen'>{this.props.children}</div>;
  }
}

export default Input;
