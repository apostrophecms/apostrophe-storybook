import { storiesOf } from '@storybook/vue'
import ApostropheBooleanInput from './ApostropheBooleanInput'

const field = {
  mandatory: false,
  name: 'approval',
  type: 'radio',
  label: 'Do you approve?'
}

storiesOf('Inputs (Boolean)', module)
  .add('Boolean', () => ({
    components: { ApostropheBooleanInput },
    data () {
      return {
        field,
        status: {},
        value: {
          data: null
        }
      }
    },
    template: `<ApostropheBooleanInput :field="field" :value="value" :status="status"/>`
  }))
  .add('Boolean (prechecked)', () => ({
    components: { ApostropheBooleanInput },
    data () {
      return {
        field,
        status: {},
        value: {
          data: false
        }
      }
    },
    template: `<ApostropheBooleanInput :field="field" :value="value" :status="status"/>`
  }))
