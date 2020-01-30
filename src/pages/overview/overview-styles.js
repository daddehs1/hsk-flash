import styled from 'styled-components';

const InfoGraphic = styled.div `
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 2.5rem;
`
const ChartTitle = styled.div `
  font-size: calc(1.8 * ${props => props.theme.baseFontSize});
  margin-bottom: .5rem;
`
const ChartGroup = styled.div `
  width: 100%;
  padding-bottom: 1.5rem;
  &:not(:last-of-type) {
    border-bottom: 1px dashed white;
    margin-bottom: 1.5rem;
  }
  font-weight: 600;
`

const HSKGroup = styled(ChartGroup)`
  .mq-tiny & {
    display: none;
  }
`

const FlashcardTickerContainer = styled.div `
width: ${props => props.wide
  ? "100%"
  : "50%"}
margin: 0 auto;
`

const ChartContainer = styled.div `
width: ${props => props.wide
  ? "100%"
  : "50%"}
margin: 0 auto;
`

const ButtonContainer = styled.div `
width: 100%;
`
export {
  InfoGraphic,
  ChartGroup,
  HSKGroup,
  ChartTitle,
  FlashcardTickerContainer,
  ChartContainer,
  ButtonContainer
}
