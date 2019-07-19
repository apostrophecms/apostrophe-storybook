import { storiesOf } from '@storybook/vue'

import AposSelectInput from './AposSelectInput.vue'

const field = {
  mandatory: false,
  name: 'plancksConstant',
  type: 'select',
  label: 'MASH housing?',
  placeholder: 'Enter the number.',
  choices: [
    {
      label: 'Mansion',
      value: 'mansion'
    },
    {
      label: 'Apartment',
      value: 'apartment'
    },
    {
      label: 'Shack',
      value: 'shack'
    },
    {
      label: 'House',
      value: 'house'
    }
  ]
}

const baseTemplate = `<AposSelectInput :field="field" :value="value" :status="status"/>`

storiesOf('Inputs (Select)', module)
  .add('Select', () => ({
    components: { AposSelectInput },
    data () {
      return {
        field,
        status: {},
        value: {
          data: null
        }
      }
    },
    template: baseTemplate
  }))
