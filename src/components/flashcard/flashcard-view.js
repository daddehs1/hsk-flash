// Flashcard component
// displays flashcard prompt (character + pronunciation
// in revealed state also displays answer (definitions)
// transitions beteween not-revealed and revealed UI states

import React from 'react';

import {
  FlashcardWrapper,
  Prompt,
  Character,
  Pronunciation,
  Answer,
  DefinitionList,
  DefinitionListItem
} from './flashcard-styles'

/**
 * Flashcard component
 * -- Passed from Parent --
 * @param  {Object} props.character The appropriate character in simplified or traditional
 * @param  {Object} props.pronunciation The appropriate pronunciation in pinyin or zhuyin
 * @param  {Object} props.characterScalingFactor The amount to scale the character text
 * @param  {Object} props.pronunciationScalingFactor The amount to scale the pronunciation text
 */
function FlashcardView(props) {

  return (<FlashcardWrapper className={props.revealed && "flashcard--revealed"}>

    {/* Prompt group, shows the character and pronunciation
      shrinks during revealed UI state */
    }
    <Prompt>
      {/* determine which character to use (simplified vs. traditional) depending on user selected reviewOptions */}
      <Character scalingFactor={props.characterScalingFactor}>{props.character}</Character>
      {/* use numChars with an additional scaling factor for zhuyin, which is less character-dense than pinyin */}
      <Pronunciation scalingFactor={props.pronunciationScalingFactor}>{props.pronunciation}</Pronunciation>
    </Prompt>

    {/* Answer group, shows the definitions
      is displayed and expands during revealed UI state */
    }
    <Answer>
      <DefinitionList>
        {/* only display top 3 definitions */}
        {props.definitions.map((definition, index) => <DefinitionListItem key={index}>{definition}</DefinitionListItem>)}
      </DefinitionList>
    </Answer>
  </FlashcardWrapper>);
}

export default FlashcardView
