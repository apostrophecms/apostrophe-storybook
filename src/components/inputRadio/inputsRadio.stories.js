import { storiesOf } from '@storybook/vue'
import AposInputsRadio from './inputsRadio.vue'

storiesOf('Inputs (Radio)', module)
  .add('Radio', () => ({
    components: { AposInputsRadio },
    template: `<AposInputsRadio name="turtles" label="Donatello" value="does machines" />`
  }))
  .add('Radio (disabled)', () => ({
    components: { AposInputsRadio },
    template: `<AposInputsRadio name="turtles" label="Donatello" value="does machines" disabled="true"/>`
  }))
