import React from 'react';

import {Bar} from 'react-chartjs-2';
import IconButton from '../../components/icon-button'
import FlashcardTicker from '../../components/flashcard-ticker'

import {
  InfoGraphic,
  ChartGroup,
  HSKGroup,
  ChartTitle,
  FlashcardTickerContainer,
  ChartContainer,
  ButtonContainer
} from './overview-styles';

function OverviewView(props) {
  return (<React.Fragment>
    <InfoGraphic>
      {/* group fpr basic information */}
      <ChartGroup>
        {/* percentage correct displayed to user */}
        <ChartTitle>{`Your Results - ${props.percentCorrect}% Correct!`}</ChartTitle>
      </ChartGroup>

      {/* group for flashcard ticker */}
      <ChartGroup>
        <ChartTitle>{`Flashcard Review`}</ChartTitle>
        <FlashcardTickerContainer wide={props.isPortrait}>
          <FlashcardTicker flashcards={props.roundOneFlashcardHistory}/>
        </FlashcardTickerContainer>
      </ChartGroup>

      {/* group for Bar Chart */}
      <HSKGroup>
        <ChartTitle>HSK Breakdown</ChartTitle>
        <ChartContainer wide={props.isPortrait}>
          <Bar data={props.barData} options={props.barOptions}/>
        </ChartContainer>
      </HSKGroup>
    </InfoGraphic>

    <ButtonContainer>
      {/* Button to start new review session */}
      <IconButton onClick={props.navigateToHomePage} icon="restart" label="New Session"/>
    </ButtonContainer>
  </React.Fragment>)
}

export default OverviewView;
