// FlashcardTicker component
// displays flashcard information to user in grid format, one flashcard at time
// can be scrolled through horizontally through user
// also autoscrolls at a given interval when user is not pressing down on the card

import React, {useEffect, useRef, useCallback, useMemo} from 'react';
import smoothscroll from 'smoothscroll-polyfill';

import FlashcardTickerView from './flashcard-ticker-view'
// pollyfill to enable smooth scrolling behavior for Safari
smoothscroll.polyfill();

const characterScaleFactors = [
  4.5,
  4.5,
  4,
  3.5,
  1.75,
  1.5,
  1.5,
  1.5
];

/**
 * FlashcardTicker component
 * @param {Object[]} props.flashcards flashcard content to be displayed in this ticker

 */
function FlashcardTicker(props) {
  // reference to the wrapper element for the content
  const contentWrapperRef = useRef(null);

  // reference to hold boolean for whether auto scrolling of ticker should be enabled or locked
  const scrollLock = useRef(false);

  // function to enable scrollLock
  const enableScrollLock = () => {
    scrollLock.current = true;
  }

  // function to disable scrollLock
  // memoize so window addEventListener useEffect hook isn't triggered on each rerender
  const disableScrollLock = useCallback(() => {
    scrollLock.current = false;
  }, []);

  // attach an event listener to the window to allow user to disable scrollLock by lifting pointer outside of current element
  useEffect(() => {
    window.addEventListener("pointerup", (disableScrollLock));
    // clean up
    return() => {
      window.removeEventListener("pointerup", disableScrollLock);
    }
  }, [disableScrollLock])

  const scaledContent = useMemo(() => props.flashcards.map((flashcard, index) => {
    const numChars = flashcard.character.length;
    const scalingFactor = characterScaleFactors[numChars - 1];
    return {
      ...flashcard,
      scalingFactor
    };
  }), [props.flashcards])

  // enable autoscroll for ticker to scroll through content automatically at given interval
  const SCROLL_INTERVAL = 2500;
  useEffect(() => {
    // setInterval for autoscroll
    const scrollInterval = setInterval(() => {
      // if scrollLock is enabled, do not scroll
      if (!scrollLock.current) {
        // scroll amount equivalent to one scrollWidth of content wrapper divided by number of elements in content
        const width = contentWrapperRef.current.scrollWidth;
        const scrollInterval = width / props.flashcards.length;
        const scrollSoFar = contentWrapperRef.current.scrollLeft;
        // calculate amount that will be scrolled after next scroll
        const nextScroll = scrollSoFar + scrollInterval;
        // if next scroll is past the scrollWidth of content, instead scroll back to 0
        // tolerance added for rounding errors
        const scrollLeft = nextScroll >= width - (scrollInterval / 3)
          ? 0
          : nextScroll;
        contentWrapperRef.current.scrollTo({behavior: 'smooth', left: scrollLeft});
      }
    }, SCROLL_INTERVAL);
    // clean up
    return() => {
      clearInterval(scrollInterval);
    }
  }, [props.flashcards.length])

  return (<FlashcardTickerView content={scaledContent} contentWrapperRef={contentWrapperRef} enableScrollLock={enableScrollLock}/>)
}

export default FlashcardTicker;
