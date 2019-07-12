import { storiesOf } from '@storybook/vue'

import AposStringInput from './AposStringInput.vue'

const field = {
  mandatory: false,
  name: 'plancksConstant',
  type: 'text',
  label: 'What is Planck\'s constant?',
  placeholder: 'Enter the number.'
}

const dateField = {
  ...field,
  type: 'date'
}

const baseTemplate = `<AposStringInput :field="field" :value="value" :status="status"/>`

storiesOf('Inputs (strings)', module)
  .add('Text', () => ({
    components: { AposStringInput },
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
    components: { AposStringInput },
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
  .add('Text, error', () => ({
    components: { AposStringInput },
    data () {
      return {
        field,
        status: {
          error: {
            type: 'invalid',
            message: 'Not a valid email address'
          }
        },
        value: {
          data: ''
        }
      }
    },
    template: baseTemplate
  }))
  .add('Date', () => ({
    components: { AposStringInput },
    data () {
      return {
        field: dateField,
        status: {},
        value: {
          data: ''
        }
      }
    },
    template: baseTemplate
  }))
