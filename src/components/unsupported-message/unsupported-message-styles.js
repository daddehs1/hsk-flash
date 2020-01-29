import styled from 'styled-components'

const UnsupportedMessageWrapper = styled.div `
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: calc(1.6 * ${props => props.theme.baseFontSize})
`

export {
  UnsupportedMessageWrapper
};
