// Radio component
// a simple radio wrapper for InputBox component
import React from 'react'
const withRadio = InputBox => props => <InputBox {...props} type={'radio'}></InputBox>

export default withRadio;
