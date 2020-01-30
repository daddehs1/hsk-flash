import {connect} from 'react-redux'
import Flashcard from './flashcard-container';

const mapStateToProps = state => ({useZhuyin: state.reviewOptions.useZhuyin, useTraditionalCharacters: state.reviewOptions.useTraditionalCharacters})

export default connect(mapStateToProps)(Flashcard);
