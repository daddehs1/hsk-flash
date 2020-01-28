import styled from 'styled-components';

const FlashcardWrapper = styled.div `
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

const Prompt = styled.div `
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 2rem 1rem;
  transition: flex-grow 0s;

${ ''/* shrik during UI revealed state */}
  .flashcard--revealed & {
    flex-grow: 0;
    transition: flex-grow .2s ease-out;
  }
`

const Character = styled.div `
  font-size: calc(${props => props.scalingFactor} * ${props => props.theme.baseFontSize});
  line-height: 1;
  width: 100%;
  margin: 2rem 0;
  transition: font-size 0s;
  color: white;

${ ''/* scale down font in UI revealed state */}
  .flashcard--revealed & {
    font-size: calc(.75 * ${props => props.scalingFactor} * ${props => props.theme.baseFontSize});
    transition: font-size 0.3s ease-out;
  }

`

const Pronunciation = styled.div `
  font-size: calc(.5 * ${props => props.scalingFactor} * ${props => props.theme.baseFontSize});
  line-height: 1;
  transition: font-size 0s;

${ ''/* scale down font in UI revealed state */}
  .flashcard--revealed & {
    font-size: calc(.333 * ${props => props.scalingFactor} * ${props => props.theme.baseFontSize});
    transition: font-size 0.3s ease-out;
  }
`

const Answer = styled.div `
  flex-shrink: 1;
  font-size: calc(2 * ${props => props.theme.baseFontSize});
  opacity: 0;
  height: 0;
  transition: opacity 0s;

${ ''/* reveal and expand in UI revealed state */}
  .flashcard--revealed & {
    flex-grow: 1;
    opacity: 1;
    transition: opacity 0.3s 0.3s ease-out;
  }
`

const DefinitionList = styled.ul `
  z-index: 100;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 5%;
  list-style: none;
  font-weight: bold;
`

const DefinitionListItem = styled.li `
  margin: 1rem;
  height: 0;

  .flashcard--revealed & {
    height: auto;
  }
`

export {
  FlashcardWrapper,
  Prompt,
  Character,
  Pronunciation,
  Answer,
  DefinitionList,
  DefinitionListItem
}
