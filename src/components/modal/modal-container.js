// Modal component
// a full-screen modal-esque component for displaying information to the user

import React, {useState, useEffect} from 'react';

import ModalView from './modal-view'
import {EXIT_ANIMATION_DURATION} from './modal-utils'
/**
 * FlashcardTicker component
 * @param {string} props.title title of the modal
 * @param {string} props.body message body of the modal
 * @param {boolean} props.leaveBackground whether modal should leave background opaque when fading during exit
 */
function Modal(props) {
  const [fade, setFade] = useState("");

  // function for exiting modal
  const exitModal = () => {
    setFade("fade");
  }

  // if fade has been set, set timeout to exit
  useEffect(() => {
    const exitTimeout = null;
    if (fade === "fade") {
      setTimeout(props.onExit, EXIT_ANIMATION_DURATION);
    }
    return() => {
      clearTimeout(exitTimeout)
    }
  }, [fade, props.onExit])

  // if leaveBackground is true, don't fade
  return (<ModalView {...props} fade={fade} exitModal={exitModal}></ModalView>)
}

export default Modal;
