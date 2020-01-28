// InputBox component
// generic, reusable base component for CheckBox and Radio
// stylized based on which type of input it is

import React from 'react';
import {InputBoxWrapper, Dummy, Button, ButtonFilling, Label} from './input-box-styles';

/**
 * InputBox component
 * @param {string} props.type type of input (CheckBox or Radio)
 * @param {string} props.name name of the input passed on to input
 * @param {Number} [props.index] index of this input (optional, used in Radio where several components share the same name)
 * @param {boolean} props.checked whether this input is checked
 * @param {boolean} props.disabled whether this input is disabled
 * @param {Function} props.onChange onChange event handler, passed on to input
 */
function InputBox(props) {
  // id to be given to input
  // used for purposes of having a function label with "htmlFor" attribute
  const inputID = `${props.name}${props.index || ""}-target`;

  return <InputBoxWrapper data-test="component-input-box">
    {/* dummy input, hidden from UI by serves functionally as input in the form */}
    <Dummy data-test='dummy' disabled={props.disabled} checked={props.checked} name={props.name} id={inputID} type={props.type} value={props.value} onChange={props.onChange}/> {/* label for this input */}
    <Label data-test="label" disabled={props.disabled}>
      {props.label}
    </Label>
    {/* button which serves as UI front for the hidden dummy input */}
    {/* rounded if this is a radio */}
    <Button data-test="button" rounded={props.type === 'radio'} disabled={props.disabled} checked={props.checked} htmlFor={inputID}>
      <ButtonFilling rounded={props.type === 'radio'} disabled={props.disabled} checked={props.checked} htmlFor={inputID}/>
    </Button>
  </InputBoxWrapper>
}

export default InputBox;
