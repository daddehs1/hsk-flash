import React from 'react';

import CheckBox from '../../components/checkbox'
import Radio from '../../components/radio'
import NumberInput from '../../components/number-input'
import IconButton from '../../components/icon-button'

import {
  OptionsForm,
  FormGroup,
  FormGroupLabel,
  FormList,
  FormListGroup,
  FormGroupListItem,
  CardNumberGroup,
  ButtonContainer,
  RadioContainer
} from './select-styles';

function SelectView(props) {
  return (<React.Fragment>
    {/* wrapper for form */}
    <OptionsForm>
      {/* group containing HSK Levels selection */}
      <FormGroup>
        {/* error is set based on form validation */}
        <FormGroupLabel error={props.isHSKSetInvalid}>Flashcard Sets
        </FormGroupLabel>
        {/* split HSK levels into lists in two even columns */}
        <FormList>
          <FormListGroup>
            {
              // checkboxes corresponding to HSK Levels
              // checked status is based on form state, mutates formState on change
              [1, 2, 3].map((level) => <FormGroupListItem key={level}>
                <CheckBox checked={props.formState['HSK' + level]} name={'HSK' + level} label={'HSK ' + level} onChange={props.handleFormChange}/>
              </FormGroupListItem>)
            }
          </FormListGroup>
          <FormListGroup>
            {
              [4, 5, 6].map((level) => <FormGroupListItem key={level}>
                <CheckBox checked={props.formState['HSK' + level]} name={'HSK' + level} label={'HSK ' + level} onChange={props.handleFormChange}/>
              </FormGroupListItem>)
            }
          </FormListGroup>
        </FormList>
      </FormGroup>

      {/* group containing number of cards selection */}
      <FormGroup>
        <FormGroupLabel>Number of Cards</FormGroupLabel>
        <CardNumberGroup>
          {
            // preset values for number of cards
            // displayed as radio buttons, checked value is based on form state, mutates form state on change
            // if selected, clears usesCustomNumCards flag
            [25, 50, 75].map((numValue, index) => <RadioContainer key={index}>
              <Radio index={index} checked={props.formState.numCards === numValue} name='numCards' label={numValue} value={numValue} onChange={props.handleNumCardsRadioChange}/>
            </RadioContainer>)
          }
        </CardNumberGroup>
        <CardNumberGroup>
          {/* text input for custom user-inputted number of cards */}

          <NumberInput
            // only display value if  usesCustomNumCards flag set
            value={props.customNumberInputValue} label="Other" name='numCards'
            // on change, run simple validation (must be number, must be between 1-99)
            
            // if validation fails, clear usesCustomNumCards flag and set numCards to default 25
            onChange={props.handleCustomNumberInputchange}></NumberInput>
        </CardNumberGroup>
      </FormGroup>

      {/* group for other review options */}
      <FormGroup>
        <FormGroupLabel>Options</FormGroupLabel>
        <FormList>
          <FormListGroup>
            <FormGroupListItem>
              <CheckBox checked={props.formState['reviewIncorrect']} name='reviewIncorrect' label={'Review Incorrect After'} onChange={props.handleFormChange}/>
            </FormGroupListItem>

            <FormGroupListItem>
              <CheckBox checked={props.formState['useZhuyin']} name='useZhuyin' label={'Use Zhuyin'} onChange={props.handleFormChange}/>
            </FormGroupListItem>

            <FormGroupListItem>
              <CheckBox checked={props.formState['useTraditionalCharacters']} name='useTraditionalCharacters' label={'Use Traditional Characters'} onChange={props.handleFormChange}/>
            </FormGroupListItem>
          </FormListGroup>
        </FormList>
      </FormGroup>
    </OptionsForm>
    {/* container holding button to advance to next state
      on click, runs validation on form
      if validation fails, set flag to display error message to user,
      if clears, push form state to redux state and advance to review page*/
    }

    <ButtonContainer>
      <IconButton icon='arrow-right' label='Begin' onClick={props.handleBeginButtonClick}/>
    </ButtonContainer>
  </React.Fragment>);
}

export default SelectView;
