import { storiesOf } from '@storybook/vue'

import AposTextInput from './AposTextInput.vue'

const field = {
  mandatory: false,
  name: 'plancksConstant',
  type: 'text',
  label: 'What is Planck\'s constant?',
  placeholder: 'Enter the number.'
}

const baseTemplate = `<AposTextInput :field="field" :value="value" :status="status"/>`

storiesOf('Inputs (Text)', module)
  .add('Text', () => ({
    components: { AposTextInput },
    data () {
      return {
        field,
        status: {},
        value: {
          data: ''
        }
      }
    },
    template: baseTemplate
  }))
  .add('Text, disabled', () => ({
    components: { AposTextInput },
    data () {
      return {
        field,
        status: {
          disabled: true
        },
        value: {
          data: ''
        }
      }
    },
    template: baseTemplate
  }))
