import { storiesOf } from '@storybook/vue'
import AposInputsGroup from './inputsGroup.vue'
import AposInputsRadio from '../inputRadio/inputsRadio.vue'
import AposInputsCheckbox from '../inputCheckbox/inputsCheckbox.vue'

const checkboxOptions = [
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

// const radioOptions = [
//   {
//     label: 'Jedi',
//     value: 'Jedi'
//   },
//   {
//     label: 'Sith',
//     value: 'Sith'
//   },
//   {
//     label: 'Minding one\'s own business',
//     value: 'Minding one\'s own business'
//   }
// ]

storiesOf('Inputs Groups (Checkbox & Radio)', module)
  .add('Checkbox', () => ({
    components: {
      AposInputsGroup,
      AposInputsCheckbox
    },
    data () {
      return {
        options: checkboxOptions
      }
    },
    template: `
      <AposInputsGroup label="Which turtles?" name="turtles" inputType="checkbox">
        <template v-slot:inputs>
          <AposInputsCheckbox v-for="option in options" :key="option.label"
            :value="option.value" :label="option.label" name="turtles" />
        </template>
      </AposInputsGroup>
    `
  }))
  .add('Radio', () => ({
    components: {
      AposInputsGroup,
      AposInputsRadio
    },
    data () {
      return {
        options: checkboxOptions,
        picked: null
      }
    },
    template: `
      <AposInputsGroup label="Which turtles?" name="turtles" inputType="checkbox">
        <template v-slot:inputs>
          <AposInputsRadio v-for="option in options" :key="option.label"
            :value="option.value" :label="option.label" name="turtles"
            :checked="picked" />
        </template>
      </AposInputsGroup>
    `
  }))
