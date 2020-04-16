import {
  withKnobs,
  select,
  optionsKnob as options,
  boolean
} from '@storybook/addon-knobs';

import AposDateInput from './AposDateInput.vue';

export default {
  title: 'Inputs (Date)'
};

export const dateInput = () => {
  const isRequired = boolean('Is Required?', false);
  const hasError = boolean('Has Error?', false);
  const hasHelpText = boolean('Has Help Text?', false);
  const status = {
    disabled: boolean('Disabled', false),
    error: hasError ? {
      type: 'invalid',
      message: 'Not valid'
    } : false
  };

  const field = {
    name: 'birthdate',
    type: 'date',
    label: 'What is your birth date?',
    placeholder: 'Enter the number.',
    help: hasHelpText ? 'Sing the Neverending Story theme song.' : false,
    // icon: icon,
    required: isRequired
  };

  const value = {
    data: ''
  };
  return {
    components: { AposDateInput },
    data () {
      return {
        status,
        field,
        value,
        modifiers: options('Modifiers', {
          'Small': 'small',
          'Inverted': 'inverted'
        },
        [],
        { display: 'multi-select' },
        null
        )
      };
    },
    template: `
      <AposDateInput 
        :modifiers="modifiers"
        :field="field"
        :status="status"
        :value="value"
      />
    `
  };
};
