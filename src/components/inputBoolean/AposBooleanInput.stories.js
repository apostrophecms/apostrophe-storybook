import { storiesOf } from '@storybook/vue'
import AposBooleanInput from './AposBooleanInput'

const field = {
  mandatory: false,
  name: 'approval',
  type: 'radio',
  label: 'Do you approve?'
}

storiesOf('Inputs (Boolean)', module)
  .add('Boolean', () => ({
    components: { AposBooleanInput },
    data () {
      return {
        field,
        status: {},
        value: {
          data: null
        }
      }
    },
    template: `<AposBooleanInput :field="field" :value="value" :status="status"/>`
  }))
  .add('Boolean (prechecked)', () => ({
    components: { AposBooleanInput },
    data () {
      return {
        field,
        status: {},
        value: {
          data: false
        }
      }
    },
    template: `<AposBooleanInput :field="field" :value="value" :status="status"/>`
  }))
