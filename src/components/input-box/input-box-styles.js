import styled from 'styled-components';

const InputBoxWrapper = styled.div `
  display: flex;
  align-items: center;
`

const Dummy = styled.input `
  position: absolute;
  ${ ''/* hide the dummy */}
  opacity: 0;
  height: 0;
  width: 0;
`

const Button = styled.label `
  cursor: pointer;
  user-select: none;
  min-width: ${props => props.theme.checkBoxSize};
  min-height: ${props => props.theme.checkBoxSize};
  ${ ''/* TODO: offload disabled color to styled-components theme */}
  border: 2px solid ${props => props.disabled
  ? '#979e9e'
  : 'white'};
  ${ ''/* border radius is determined by type of input */}
  border-radius: ${props => props.rounded
    ? "100%"
    : `calc(.3 * ${props.theme.checkBoxSize})`};
  display: inline-block;
  position: relative;
  margin-left: auto;
`

const ButtonFilling = styled.label `
  width: calc(.6 * ${props => props.theme.checkBoxSize});
  height: calc(.6 * ${props => props.theme.checkBoxSize});
  border-radius: ${props => props.rounded
  ? "100%"
  : `calc(.13 * ${props.theme.checkBoxSize})`};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${props => props.disabled
    ? '#979e9e'
    : 'white'};
  opacity: ${props => props.checked
      ? '1'
      : '0'};
  transition: 0.15s all;
`

const Label = styled.label `
  display: inline-block;
  text-align: left;
  font-weight: 600;
  letter-spacing: 1px;
  transition: color 0.1s;
  font-size: calc(1.5 * ${props => props.theme.baseFontSize});
  margin-right: calc(1 * ${props => props.theme.baseFontSize});
`

export {
  InputBoxWrapper,
  Dummy,
  Button,
  ButtonFilling,
  Label
}
