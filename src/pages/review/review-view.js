import React from 'react';

import Swiper from '../../components/swiper';
import Progress from '../../components/progress';
import Scorebar from '../../components/scorebar';
import Flashcard from '../../components/flashcard';
import IconButton from '../../components/icon-button';
import Tab from '../../components/tab';
import Modal from '../../components/modal';

import {ProgressContainer, FlashcardContainer, ButtonContainer, GraderContainer} from './review-styles'

function ReviewView(props) {

  const {state} = props;
  return (<React.Fragment>
    {/* Modal, conditionally rendered if some modal is open (i.e. currentOpanModal !== null) */}
    {props.currentOpenModal && <Modal leaveBackground={props.currentOpenModal.leaveBackground} title={props.currentOpenModal.title} body={props.currentOpenModal.body} onExit={props.modalExitFunction}/>}

    {/* Correct/Incorrect Swipers */}
    <Swiper invisible={state.isSwipersInvisible} type='correct' position={state.correctSwiperPosition}/>
    <Swiper invisible={state.isSwipersInvisible} type='incorrect' position={state.incorrectSwiperPosition}/>

    <ProgressContainer>
      {/* Progress bar containing percentage of incorrect/answers */}
      <Progress history={props.progressHistory.filter(historyPoint => historyPoint.round === state.currentRound)} numTotal={state.activeFlashcardIDs.length}/>
    </ProgressContainer>

    {/* Scorebar - shows basic info about number attempted and number correct */}
    <Scorebar numAttempted={state.numAttempted} numTotal={state.activeFlashcardIDs.length} numCorrect={state.numCorrect}></Scorebar>

    <FlashcardContainer>
      {/* Flashcard - component which contains the prompt and answer information of the current flashcard */}
      <Flashcard flashcard={props.currentFlashcard} revealed={state.isRevealed}></Flashcard>
    </FlashcardContainer>

    {/* Container which holds the reveal button as well as the answer correct/incorrect buttons */}
    <ButtonContainer>
      {/* Tab which contains Reveal Button */}
      <Tab name="reveal" instant={!state.isRevealed} active={!state.isRevealed}>
        <IconButton icon="eye" label="Reveal" onClick={props.handleRevealButtonClick}></IconButton>
      </Tab>

      {/* Tab which contains Correct/Incorrect Answer Buttons */}
      <Tab name="answer-choices" instant={!state.isRevealed} active={state.isRevealed}>
        <GraderContainer>
          {
            props.answerButtonsInfo.map(buttonInfo => <IconButton key={buttonInfo.type} type={buttonInfo.type} small="small" icon={buttonInfo.icon} label={buttonInfo.label} onMouseOver={() => {
                props.handleAnswerButtonMouseOver(buttonInfo.type)
              }} onMouseOut={() => {
                props.handleAnswerButtonMouseOut(buttonInfo.type)
              }} onClick={() => {
                props.handleAnswerButtonClick(buttonInfo.type)
              }}/>)
          }
        </GraderContainer>
      </Tab>
    </ButtonContainer>
  </React.Fragment>)
}

export default ReviewView;
