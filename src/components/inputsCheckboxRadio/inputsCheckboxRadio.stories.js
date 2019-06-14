import { storiesOf } from '@storybook/vue'
import AposInputsCheckboxRadio from './inputsCheckboxRadio.vue'

const options = [
  {
    label: 'Michaelangelo',
    value: 'party dude'
  },
  {
    label: 'Leonardo',
    value: 'leads'
  },
  {
    label: 'Rafael',
    value: 'cool but rude'
  },
  {
    label: 'Donatello',
    value: 'does machines'
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
