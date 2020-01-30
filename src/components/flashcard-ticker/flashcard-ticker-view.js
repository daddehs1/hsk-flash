import React from 'react';

import {
  FlashcardTickerViewWrapper,
  Content,
  ContentGrid,
  Character,
  Pronunciation,
  Definition
} from './flashcard-ticker-styles'

/**
 * FlashcardTickerView component
 * @param {Object[]} props.content flashcard content to be displayed in this ticker
 *   props.flashcards[x]:
 *   @param {string} character character of the word
 *   @param {string} pronunciation pronunciation of the word
 *   @param {string} definition definition of word
 *   @param {boolean} isCorrect whether the user answered this word correct
 *   @param {Number} scalingFactor number which represents the factor to scale the size of the flashcard information displayed
 */
function FlashcardTickerView(props) {
  return (<FlashcardTickerViewWrapper
    // if user trigger pointerDown on this element, enable scrollLock
    onPointerDown={props.enableScrollLock} ref={props.contentWrapperRef}>
    {
      // map content elements (flashcards) onto a grid of content
      props.content.map((flashcard, index) => {
        return <Content key={index}>
          {/* grid representing layout for display of this flashcard */}
          <ContentGrid>
            {/* use numChars to allow scaling down of font-size for longer words */}
            <Character scalingFactor={flashcard.scalingFactor} isCorrect={flashcard.isCorrect}>{flashcard.character}</Character>
            <Pronunciation scalingFactor={flashcard.scalingFactor}>{flashcard.pronunciation}</Pronunciation>
            <Definition scalingFactor={flashcard.scalingFactor} numChars={flashcard.definition.length}>
              {flashcard.definition}
            </Definition>
          </ContentGrid>
        </Content>
      })
    }
  </FlashcardTickerViewWrapper>)
}

export default FlashcardTickerView;
