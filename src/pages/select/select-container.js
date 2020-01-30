// Select Page
// first screen that user sees
// user selects options for the flashcard review

import React, {useCallback, useState, useEffect} from 'react';
import {withRouter} from 'react-router-dom'

import SelectView from './select-view';

// set up initial form state for user to select review options
const initialFormState = {
  // HSK Levels: should include vocabulary from this HSK level in flashcard review
  HSK1: false,
  HSK2: false,
  HSK3: false,
  HSK4: false,
  HSK5: false,
  HSK6: false,
  // number of cards that will be included in review
  numCards: 25,
  // flag for determining whether to re-review incorrectly answered flashcards after first round review
  reviewIncorrect: true,
  // flag for determining whether Mandarin pronunciations should be displayed to user in Zhuyin (bopomofo)
  useZhuyin: false,
  // flag for determining whether Chinese characters should be displayed to user using traditional characters
  useTraditionalCharacters: false
}

/**
 * custom hook to manage maintaining a form-state
 * essentially a wrapper for useState hook that simplifies mutation of state from form input
 * @return {[Object, Function]}
 * [0] Object representing the form state
 * [1] event handler used to mutate state based on input events
 */
function useFormState() {
  // uses useState hook internally to maintain state
  const [formState, setFormState] = useState(initialFormState);
  /**
   * Callback for handling form input and using it to modify form state
   * @param  {event} event The input event, passed through from input "on" event
   * @param  {Number} [customValue] A custom value to set form state to
   *   used e.g. to reset numCards to 25 if invalid user input
   */
  const handleFormInput = useCallback((event, customValue) => {
    var newValue;
    // select newValue based on the type of input
    switch (event.target.type) {
      default:
      case 'checkbox':
        newValue = event.target.checked;
        break;
      case 'radio':
        newValue = parseInt(event.target.value);
        break;
      case 'number':
        newValue = parseInt(event.target.value);
        break;
    }
    // set the form state property based on the input's name
    // set to either customValue if provided, or newValue determined from input checked/value
    setFormState({
      ...formState,
      [event.target.name]: customValue || newValue
    })
  }, [formState]);
  return [formState, handleFormInput];
}

/**
 * Select component
 * -- Mapped from Dispatch --
 *  @param  {Function} setReviewOptions pushes currently selected reviewOptions to redux state
 *  TODO it would be better to just have redux state be single source of truth rather than have a local state in the component and then push to redux on submit
 */
function Select(props) {

  const {setReviewOptions} = props;

  // form state represeting the review options selected by user
  const [formState, handleFormInput] = useFormState();
  // flag for determining whether to use a user-inputted value for numCards rather than preset values
  // used deselect preset radio buttons and user-inputted value to share same state form property (numCards)
  const [usesCustomNumCards, setUsesCustomNumCards] = useState(false);
  // flag for whether the selected set of HSK Level is valid (i.e. at least one selected)
  // used in form validation, for displaying error to user if invalid
  const [isHSKSetInvalid, setIsHSKSetInvalid] = useState(false);
  // flag for whether user has attempted to submit form
  // used in form validation, to prevent displaying error to user before initial submit attempt
  const [hasAttemptedSubmit, setHasAttemptedSubmit] = useState(false);

  // destructure actions from props to avoid using props as dependency
  const {resetState} = props;
  // reset redux state on initial mount
  useEffect(() => {
    resetState();
  }, [resetState])

  // simple form validation
  // if user has attempted to submit form and no HSK Level has been selected, invalidate
  useEffect(() => {
    if (hasAttemptedSubmit && !(formState.HSK1 || formState.HSK2 || formState.HSK3 || formState.HSK4 || formState.HSK5 || formState.HSK6)) {
      setIsHSKSetInvalid(true);
    } else {
      setIsHSKSetInvalid(false);
    }
  }, [
    hasAttemptedSubmit,
    formState.HSK1,
    formState.HSK2,
    formState.HSK3,
    formState.HSK4,
    formState.HSK5,
    formState.HSK6
  ])

  const handleNumCardsRadioChange = useCallback(event => {
    setUsesCustomNumCards(false);
    handleFormInput(event);
  }, [handleFormInput])

  const handleFormChange = useCallback(event => {
    handleFormInput(event);
  }, [handleFormInput])

  const customNumberInputValue = usesCustomNumCards
    ? formState.numCards
    : " ";

  const handleCustomNumberInputchange = useCallback(event => {
    const newValue = event.target.value;
    if (newValue.match(/^\d+$/)) {
      setUsesCustomNumCards(true);
      if (newValue < 1) {
        handleFormInput(event, 1);
      } else if (newValue > 99) {
        handleFormInput(event, 99);
      } else {
        handleFormInput(event);
      }
    } else {
      handleFormInput(event, 25);
      setUsesCustomNumCards(false);
    }
  }, [handleFormInput])

  const handleBeginButtonClick = useCallback(() => {
    if (!(formState.HSK1 || formState.HSK2 || formState.HSK3 || formState.HSK4 || formState.HSK5 || formState.HSK6)) {
      setHasAttemptedSubmit(true)
    } else {
      setReviewOptions(formState);
      props.history.replace('/review')
    }
  }, [formState, props.history, setReviewOptions])

  // render
  return <SelectView {...{formState, handleFormInput, isHSKSetInvalid, handleNumCardsRadioChange, handleFormChange, customNumberInputValue, handleCustomNumberInputchange, handleBeginButtonClick}}></SelectView>
}

export default withRouter(Select);
