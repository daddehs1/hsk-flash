// CheckBox component
// a simple checkbox wrapper for InputBox component
import React from 'react'
const withCheckBox = InputBox => props => <InputBox {...props} type={'checkbox'}></InputBox>

export default withCheckBox;
