import { storiesOf } from '@storybook/vue'
import AposInputsCheckboxRadio from './inputsCheckboxRadio.vue'

const options = [
  {
    label: 'Michaelangelo',
    value: 'party dude'
  },
  {
    label: 'Leonardo',
    value: 'leads',
    indeterminate: true
  },
  {
    label: 'Rafael',
    value: 'cool but rude'
  },
  {
    label: 'Donatello',
    value: 'does machines',
    disabled: true
  }
]

storiesOf('Inputs (Checkbox & Radio)', module)
  .add('Checkbox', () => ({
    components: { AposInputsCheckboxRadio },
    data () {
      return {
        options
      }
    },
    template: `<AposInputsCheckboxRadio label="Which turtles?" name="turtles" inputType="checkbox" :options="options" />`
  }))
