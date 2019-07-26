import { storiesOf } from '@storybook/vue'

import AposRadioInput from './AposRadioInput.vue'

const field = {
  mandatory: true,
  name: 'turtleLeads',
  type: 'radio',
  label: 'He\'s the leader',
  choices: [
    {
      label: 'Michelangelo',
      value: 'Michelangelo'
    },
    {
      label: 'Donatello',
      value: 'Donatello',
      indeterminate: true
    },
    {
      label: 'Leonardo',
      value: 'Leonardo'
    },
    {
      label: 'Raphael',
      value: 'Raphael'
    }
  ]
}

const baseTemplate = `<AposRadioInput :field="field" :value="value" :status="status"/>`

storiesOf('Inputs (Radio)', module)
  .add('Radio', () => ({
    components: { AposRadioInput },
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
  .add('Radio (disabled)', () => ({
    components: { AposRadioInput },
    data () {
      return {
        field,
        status: {
          disabled: true
        },
        value: {
          data: null
        }
      }
    },
    template: baseTemplate
  }))
