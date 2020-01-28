import styled from 'styled-components'

const HeaderWrapper = styled.div `
  display: flex;
  align-items: center;
`

const TitleText = styled.div `
font-size: calc(2.2 * ${props => props.theme.baseFontSize});
font-weight: bold;
margin: 0 2rem;
`

export {
  HeaderWrapper,
  TitleText
}
