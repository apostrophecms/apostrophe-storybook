import {
  withKnobs,
  select,
  optionsKnob as options,
  boolean
} from '@storybook/addon-knobs';

import AposStringInput from './AposStringInput.vue';

export default {
  title: 'Inputs (string)'
};

export const stringInputs = () => {
  const hasError = boolean('Has Error?', false);
  const hasHelpText = boolean('Has Help Text?', false);
  const isRequired = boolean('Is Required?', false);
  const icon = select(
    'Icon', {
      None: null,
      Calendar: 'Calendar',
      Search: 'Magnify',
      Time: 'Clock',
      Phone: 'Phone'
    },
    null
  );

  const value = {
    data: ''
  };

  const status = {
    disabled: boolean('Disabled', false),
    error: hasError ? {
      type: 'invalid',
      message: 'Not valid'
    } : false
  };

  const field = {
    name: 'plancksConstant',
    type: 'text',
    label: 'What is Planck\'s constant?',
    placeholder: 'Enter the number.',
    help: hasHelpText ? 'Sing the Neverending Story theme song.' : false,
    icon: icon,
    required: isRequired
  };

  return {
    components: { AposStringInput },
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
      <AposStringInput 
        :field="field"
        :value="value"
        :status="status"
        :modifiers="modifiers"
      />`
  };
};
