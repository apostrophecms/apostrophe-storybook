import { storiesOf } from '@storybook/vue'

import AposTextInput from './AposTextInput.vue'

const field = {
  mandatory: false,
  name: 'plancksConstant',
  type: 'text',
  label: 'What is Planck\'s constant?'
}

storiesOf('Inputs (Text)', module)
  .add('Text', () => ({
    components: { AposTextInput },
    data () {
      return {
        field,
        value: {
          data: 'test'
        }
      }
    },
    template: `<AposTextInput :field="field" :value="value" />`
  }))
