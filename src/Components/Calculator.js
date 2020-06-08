import React, { Component } from 'react';
import Button from './Button';
import Input from './Input';
import * as math from 'mathjs';

class Calculator extends Component {
  state = {
    input: '',
  };

  addInput = (value) => {
    this.setState({
      input: this.state.input + value,
    });
  };

  inputTotal = () => {
    this.setState({ input: math.evaluate(this.state.input) });
  };

  clearInput = () => {
    this.setState({ input: '' });
  };

  render() {
    console.log(this.state.input);
    return (
      <div className='calc-container'>
        <Input>{this.state.input}</Input>
        <div className='calculator-keys'>
          <Button clicked={this.addInput} styling={'operator'} value={'+'}>
            +
          </Button>
          <Button clicked={this.addInput} styling={'operator'} value={'-'}>
            -
          </Button>
          <Button clicked={this.addInput} styling={'operator'} value={'*'}>
            *
          </Button>
          <Button clicked={this.addInput} styling={'operator'} value={'/'}>
            /
          </Button>

          <Button clicked={this.addInput} onClick={this.addInput} value={'7'}>
            7
          </Button>
          <Button clicked={this.addInput}>8</Button>
          <Button clicked={this.addInput}>9</Button>

          <Button clicked={this.addInput}>4</Button>
          <Button clicked={this.addInput}>5</Button>
          <Button clicked={this.addInput}>6</Button>

          <Button clicked={this.addInput}>1</Button>
          <Button clicked={this.addInput}>2</Button>
          <Button clicked={this.addInput}>3</Button>

          <Button clicked={this.addInput}>0</Button>

          <Button clicked={this.addInput} styling={'decimal'}>
            .
          </Button>
          <Button clicked={this.clearInput} styling={'all-clear'}>
            AC
          </Button>
          <Button clicked={this.inputTotal} styling={'equal-sign'}>
            =
          </Button>
        </div>
      </div>
    );
  }
}

{
  /* <button type='button' className='operator' value='+'>
            +
          </button>
          <button type='button' className='operator' value='-'>
            -
          </button>
          <button type='button' className='operator' value='*'>
            &times;
          </button>
          <button type='button' className='operator' value='/'>
            &divide;
          </button>
          
          <button type='button' value='7'>
            7
          </button>
          <button type='button' value='8'>
            8
          </button>
          <button type='button' value='9'>
            9
          </button>

          <button type='button' value='4'>
            4
          </button>
          <button type='button' value='5'>
            5
          </button>
          <button type='button' value='6'>
            6
          </button>

          <button type='button' value='1'>
            1
          </button>
          <button type='button' value='2'>
            2
          </button>
          <button type='button' value='3'>
            3
          </button>

          <button type='button' value='0'>
            0
          </button>
          
          */
}

{
  /* <button type='button' className='decimal' value='.'>
            .
          </button>
          <button type='button' className='all-clear' value='all-clear'>
            AC
          </button>

          <button type='button' className='equal-sign' value='='>
            =
          </button> */
}

export default Calculator;
