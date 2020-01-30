// Scorebar component
// a simple component for displaying some numeric information about current review

import React from 'react';

import {ScorebarWrapper, CompletedScore, CorrectScore} from './scorebar-styles'

/**
 * Scorebar component
 * @param {Object[]} props.numAttempted how many flashcards have been reviewed so far
 * @param {string} props.numTotal the total number of flashcards in this review session
 */
function ScorebarView(props) {
  return (<ScorebarWrapper>
    {/* Display the current flashcard out of total */}
    <CompletedScore>{props.numAttempted + 1}/{props.numTotal}</CompletedScore>
    {/* Display number of flashcards correct so far */}
    <CorrectScore>{props.numCorrect}{" "}
      Correct</CorrectScore>
  </ScorebarWrapper>)
}

export default ScorebarView;
