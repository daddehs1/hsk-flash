import {connect} from 'react-redux'
import {initializeFlashcards, pushToProgressHistory, clearProgressHistory} from "../../redux/actions";

import Review from './review-container'
const mapStateToProps = state => {
  return ({
    reviewOptions: {
      ...state.reviewOptions
    },
    isInitialized: state.isInitialized,
    flashcards: state.flashcards,
    progressHistory: state.progressHistory
  })
}

export default connect(mapStateToProps, {initializeFlashcards, pushToProgressHistory, clearProgressHistory})(Review)
