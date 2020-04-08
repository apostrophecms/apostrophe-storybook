import { storiesOf } from '@storybook/vue';

import AposCheckboxInput from './AposCheckboxInput.vue';

const field = {
  required: true,
  name: 'toppings',
  type: 'radio',
  label: 'Which toppings?',
  choices: [
    {
      label: 'Banana peppers',
      value: 'Banana peppers'
    },
    {
      label: 'Mushrooms',
      value: 'Mushrooms',
      indeterminate: true
    },
    {
      label: 'Cold cheese',
      value: 'Cold cheese'
    },
    {
      label: 'Anchovies',
      value: 'Anchovies'
    }
  ]
};

const baseTemplate = `<AposCheckboxInput :field="field" :value="value" :status="status"/>`;

storiesOf('Inputs (Checkbox)', module)
  .add('Checkbox', () => ({
    components: { AposCheckboxInput },
    data () {
      return {
        field,
        status: {},
        value: {
          data: null
        }
      };
    },
    template: baseTemplate
  }))
  .add('Checkbox (disabled)', () => ({
    components: { AposCheckboxInput },
    data () {
      return {
        field,
        status: {
          disabled: true
        },
        value: {
          data: null
        }
      };
    },
    template: baseTemplate
  }));
