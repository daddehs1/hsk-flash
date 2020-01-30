import {connect} from "react-redux";
import {resetState, setReviewOptions} from "../../redux/actions";

import Select from './select-container';
export default connect(null, {resetState, setReviewOptions})(Select);
