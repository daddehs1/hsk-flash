import styled from 'styled-components';

const TabWrapper = styled.div `
  opacity: ${props => props.fade === "out"
  ? 0
  : 1};
  transition: opacity ${props => props.switchDuration}ms;
`

export {
  TabWrapper
}
