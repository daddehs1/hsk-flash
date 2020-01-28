// Icon Button component
// a generic, reusable button component that combines a icon (feather icons) and a label
// responsive layout, removes label on mobile depending on props

import styled from 'styled-components';

const IconButtonWrapper = styled.div `
  cursor: pointer;
  ${ ''/* background-color: rgba(255,255,255, .2); */}
  padding: .5rem 3rem;
  min-width: 30%;
  max-width: 50%;
  margin: 0 auto;
  .mq-mobile & {
    max-width: 90%;
  }

  border: .3rem solid white;
  border-radius: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-out;
  color: white;
  `

const Label = styled.div `
  margin-left: calc(.5 * calc(1.2rem + 0.35vw));
  white-space: nowrap;
  font-size: calc(2.5 * calc(1.2rem + 0.35vw));
${ ''/* if props small is present, do not display the label in mobile */}
  .mq-mobile & {
    display: ${props => props.small
  ? "none"
  : "inherit"};
  }
`

export {
  IconButtonWrapper,
  Label
}
