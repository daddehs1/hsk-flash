import React, {useCallback} from 'react';

import IconButton from '../../../../components/icon-button';

function AnswerButton(props) {

  const handleOnMouseOver = useCallback(() => state.isUILocked || dispatch({
    type: buttonInfo.setSwiperPositionActionType,
    payload: {
      position: 'peek'
    }
  }), [])

  return <IconButton key={props.type} type={props.type} small="small" icon={props.icon} label={props.label}
    // have corresponding swiper peek out on mouseover
    onMouseOver={1}
    // have corresponding swiper hide on mouseout
    onMouseOut={() => state.isUILocked || dispatch({
      type: buttonInfo.setSwiperPositionActionType,
      payload: {
        position: 'hide'
      }
    })}
    // call handler for button onclick
    onClick={() => {
      state.isUILocked || handleButtonOnClick({type: buttonInfo.type})
    }}></IconButton>
}

export default AnswerButton;
