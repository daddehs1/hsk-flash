import {connect} from 'react-redux'
import Overview from './overview-container';

const mapStateToProps = state => {
  return {isInitialized: state.isInitialized, reviewOptions: state.reviewOptions, progressHistory: state.progressHistory, flashcards: state.flashcards}
}

export default connect(mapStateToProps)(Overview);
