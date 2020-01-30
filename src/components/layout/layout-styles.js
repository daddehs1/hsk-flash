import styled from 'styled-components'
import Div100vh from 'react-div-100vh'

const LayoutWrapper = styled(Div100vh)`
  user-select: none;
  background-color: hsl(210, 83%, 16%);
  position: fixed;
  display: flex;
  flex-direction: column;
  height: '100rvh';
  width: 100vw;
  padding: calc(1.6 * ${props => props.theme.baseFontSize}) calc(.8 * ${props => props.theme.baseFontSize});
`
const HeaderContainer = styled.div `
  padding: calc(.25 * ${props => props.theme.baseMarginSize});
`

const UnsupportedMessageContainer = styled.div `
  ${ ''/* display content if landscape and large screen */}
  display: none;
  height: 100%;
  width: 100%;
  .mq-landscape:not(.mq-large) & {
    display: inherit;
  }
`

const ContentContainer = styled.div `
  padding: calc(.25 * ${props => props.theme.baseMarginSize});
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;

${ ''/* do not display content if landscape and large screen */}
  .mq-landscape:not(.mq-large) & {
    display: none;
  }
`
const FooterContainer = styled.div `
  height: 0%
`

export {
  LayoutWrapper,
  HeaderContainer,
  UnsupportedMessageContainer,
  ContentContainer,
  FooterContainer
}
