import styled from 'styled-components';

const OptionsForm = styled.form `
  flex: 1;
  height: 100%;
  width: 100%;
  padding: 0 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const FormGroup = styled.div `
  width: 100%;
  padding-bottom: calc(1.5 * ${props => props.theme.baseMarginSize});
  &:not(:last-of-type) {
    border-bottom: 1px dashed white;
    margin-bottom: calc(1.5 * ${props => props.theme.baseMarginSize});
  }
  font-weight: 600;
`

const FormGroupLabel = styled.div `
  font-size: calc(1.8 * ${props => props.theme.baseFontSize});
  margin-bottom: .5rem;
  ${props => props.error && `
    &:after {
      color: ${props.theme.colors.incorrect};
      content: " *";
    }
  `}
`

const FormList = styled.ul `
  list-style: none;
  grid-template-columns: 1fr 1fr;
  grid-auto-flow: column;
`

const FormListGroup = styled.div `
  white-space:normal;
  display: inline-block;
`

const FormGroupListItem = styled.li `
  margin: 0 calc(1.5 * ${props => props.theme.baseMarginSize}) calc(1.5 * ${props => props.theme.baseMarginSize});
  &:not(:first-of-type) {
    margin-top: 1rem;
  }
`

const CardNumberGroup = styled.div `
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`

const ButtonContainer = styled.div `
    width: 100%;
`

const RadioContainer = styled.div `
  margin: 0 calc(1.5 * ${props => props.theme.baseMarginSize});
`

export {
  OptionsForm,
  FormGroup,
  FormGroupLabel,
  FormList,
  FormListGroup,
  FormGroupListItem,
  CardNumberGroup,
  ButtonContainer,
  RadioContainer
};
