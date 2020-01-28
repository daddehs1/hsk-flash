// NumberInput component
// a generic, reusable number input + label component

import React from 'react';
import {NumberInputWrapper, Input, Label} from './number-input-styles'

/**
 * NumberInput component
 * @param {string} props.label label to display next to input
 * @param {string} props.name name to pass down to input
 * @param {string} props.value value to pass down to input
 * @param {Function} props.onChange event handler for onChange to pass on to input
 */
function NumberInput(props) {
  return <NumberInputWrapper>
    <Label>
      {props.label}
    </Label>
    <Input name={props.name} pattern="\d*" type="number" value={props.value} onChange={props.onChange}/>
  </NumberInputWrapper>
}

export default NumberInput;
