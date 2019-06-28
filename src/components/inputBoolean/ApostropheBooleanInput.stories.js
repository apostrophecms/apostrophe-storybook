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
        value: {
          data: 'test'
        }
      }
    },
    template: `<ApostropheBooleanInput :field="field" :value="value" />`
  }))
