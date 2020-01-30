import styled from 'styled-components';

const ProgressWrapper = styled.div `
  height: 1.4rem;
  width: 80%;
  margin: 0 auto;
  .mq-mobile & {
    width: 100%;
  }
  ${ ''/* border: 2px solid white; */}
  border-radius: 1rem;
  position: relative;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  background-color: rgba(255,255,255, .4);
`

// Base styled component for CorrectProgressBar and IncorrectProgressBar
const ProgressBar = styled.div `
  height: 100%;
  width: ${props => props.widthPercent}%;
`

const CorrectProgressBar = styled(ProgressBar)`
  background-color: ${props => props.theme.colors.correct};
`

const IncorrectProgressBar = styled(ProgressBar)`
  background-color: ${props => props.theme.colors.incorrect};
`

export {
  ProgressWrapper,
  ProgressBar,
  CorrectProgressBar,
  IncorrectProgressBar
}
