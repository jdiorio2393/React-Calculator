import React, { Component } from 'react';

class Button extends Component {
  render() {
    return (
      <button
        type='button'
        onClick={() => this.props.clicked(this.props.children)}
        className={this.props.styling}
      >
        {this.props.children}
      </button>
    );
  }
}

export default Button;
