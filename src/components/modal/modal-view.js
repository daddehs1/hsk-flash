import React from 'react';
import IconButton from '../icon-button'

import {ModalWrapper, Display, Title, Body, Button} from './modal-styles'

/**
 * FlashcardTicker component
 * @param {string} props.title title of the modal
 * @param {string} props.body message body of the modal
 * @param {boolean} props.leaveBackground whether modal should leave background opaque when fading during exit
 */
function ModalView(props) {
  return (<ModalWrapper fade={!props.leaveBackground
      ? props.fade
      : undefined}>
    <Display fade={props.fade}>
      <Title>
        {props.title}
      </Title>
      <Body>
        {props.body}
      </Body>
      <Button>
        <IconButton onClick={props.exitModal} icon="x" label="Close"></IconButton>
      </Button>
    </Display>
  </ModalWrapper>)
}

export default ModalView;
