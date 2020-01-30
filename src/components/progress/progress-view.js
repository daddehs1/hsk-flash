import React from 'react';

import {ProgressWrapper, CorrectProgressBar, IncorrectProgressBar} from './progress-styles'

// Progress component
// a progress bar which displays percent correct / incorrect from progressHistory
/**
 * Progress component
 * @param {Object} props.history review history to display progress of
 *   @param {boolean} isCorrect whether the user answered this word correct
 */
function ProgressView(props) {
  const numTotal = props.history.length;
  const numCorrect = props.history.filter(progressPoint => progressPoint.isCorrect).length;
  const numIncorrect = numTotal - numCorrect;
  return (<ProgressWrapper>
    {/* Create one ProgressBar of each version for Correct and Incorrect */}
    <CorrectProgressBar widthPercent={numCorrect / numTotal * 100}/>
    <IncorrectProgressBar widthPercent={numIncorrect / numTotal * 100}/>
  </ProgressWrapper>)
}

export default ProgressView;
