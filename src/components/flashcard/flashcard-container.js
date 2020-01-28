// Flashcard component
// displays flashcard prompt (character + pronunciation
// in revealed state also displays answer (definitions)
// transitions beteween not-revealed and revealed UI states

import React, {useMemo} from 'react';
import FlashcardView from './flashcard-view'

const SCALING_FACTORS = [
  12,
  10,
  8,
  7,
  6,
  5,
  5,
  5
];

/**
 * Flashcard component
 * -- Passed from Parent --
 * @param  {Object} props.flashcard Information about a word to display in flashcard form
 *   @param  {string} hanzi simplified Chinese characters for the word
 *   @param  {string} hanziTraditional traditional Chinese characters for the word
 *   @param  {string} pinyin pinyin pronunciation for the word
 *   @param  {string || string[]} zhuyin zhuyin pronunciation for the words, Array if length > 1
 * -- Mapped from State --
 * @param {boolean} props.useZhuyin whether to display pronunciation as zhuyin
 * @param {boolean} props.useTraditionalCharacters whether to display characters as traditional characters
 */
function Flashcard(props) {

  // character will be either traditional or simplified depending on user-selected review options
  const character = props.useTraditionalCharacters
    ? props.flashcard.hanziTraditional
    : props.flashcard.hanzi;

  // pronunciation will be either pinyin or zhuyin depending on user-selected review options
  // zhuyin is a string for one-character flashcards, for multicharacter flashcards it is an Array
  const pronunciation = useMemo(() => {
    if (props.useZhuyin) {
      var flashcardZhuyin = props.flashcard.zhuyin;
      return Array.isArray(flashcardZhuyin)
        ? flashcardZhuyin.join(" ")
        : flashcardZhuyin;
    } else {
      return props.flashcard.pinyin;
    }
  }, [props.flashcard.pinyin, props.flashcard.zhuyin, props.useZhuyin])

  // number of characters in the flashcard hanzi
  // used to scale font-size down for longer words/pronunciations
  const numChars = props.flashcard.hanzi.length;
  const characterScalingIndex = numChars - 1;
  const characterScalingFactor = SCALING_FACTORS[characterScalingIndex];
  const pronunciationScalingIndex = numChars * (
    props.useZhuyin
    ? 2
    : 1) - 1;
  const pronunciationScalingFactor = SCALING_FACTORS[pronunciationScalingIndex];

  const definitions = useMemo(() => props.flashcard.translations.slice(0, 3), [props.flashcard.translations]);

  return (<FlashcardView revealed={props.revealed} {...{character, pronunciation, characterScalingFactor, pronunciationScalingFactor, definitions}}></FlashcardView>);
}

export default Flashcard;
