// Swiper component
// a colored swiper to aid transition effects

import React from 'react';

import {CorrectSwiper, IncorrectSwiper} from './swiper-styles'
/**
 * Swiper component
 * @param  {string} props.type the type of the swiper (Correct or Incorrect)
 * @param  {boolean} props.invisible whether this swiper should be invisble
 * @param  {string} props.position the position of the swiper (hide, peek, hide-opposite)
 */
function SwiperView(props) {
  return (
    props.type === 'correct'
    ? <CorrectSwiper invisible={props.invisible} position={props.position}/>
    : <IncorrectSwiper invisible={props.invisible} position={props.position}/>)
}

export default SwiperView;
