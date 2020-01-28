import styled from 'styled-components';

const FlashcardTickerViewWrapper = styled.div `
  display: flex;
  flex-wrap: nowrap;
  background-color: rgba(255,255,255,.2);
  border-radius: 1rem;
  margin: 1rem;
${ ''/* style to enable horizontal scrolling and snapping */}
  white-space: nowrap;
  word-break: nowrap;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  &::-webkit-scrollbar {
    display:none;
  }
}
`

const Content = styled.div `
  scroll-snap-align: start;
  padding: 1rem;
  display:inline-grid;
  min-width: 100%;
`

const ContentGrid = styled.div `
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  flex-shrink: 0;
  align-items: center;
`

const Character = styled.span `
  font-weight: 500;
  text-align: right;
  font-size: calc(${props => props.scalingFactor} * ${props => props.theme.baseFontSize});
  grid-area: character;
  color: ${props => props.isCorrect
  ? props.theme.colors.correct
  : props.theme.colors.incorrect};
  margin: 0 .5rem;
`
const Pronunciation = styled.span `
  text-align: left;
  ${ ''/* font-size: calc(1.8 * ${props => props.theme.baseFontSize}); */}
  font-size: calc(.4 * ${props => props.scalingFactor} * ${props => props.theme.baseFontSize});
  margin: 0 .5rem;
`

const Definition = styled.div `
  font-size: calc((2 - ${props => props.scalingFactor / 100}) * ${props => props.theme.baseFontSize});
  white-space: normal;
  grid-area: definitions;
`

export {
  FlashcardTickerViewWrapper,
  Content,
  ContentGrid,
  Character,
  Pronunciation,
  Definition
}
