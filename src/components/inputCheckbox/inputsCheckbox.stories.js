import { storiesOf } from '@storybook/vue'
import AposInputsCheckbox from './inputsCheckbox.vue'

storiesOf('Inputs (Checkbox)', module)
  .add('Checkbox', () => ({
    components: { AposInputsCheckbox },
    template: `<AposInputsCheckbox name="turtles" label="Donatello" value="does machines" />`
  }))
  .add('Checkbox (checked)', () => ({
    components: { AposInputsCheckbox },
    template: `<AposInputsCheckbox name="turtles" label="Donatello" value="does machines" checked="true"/>`
  }))
  .add('Checkbox (indeterminate)', () => ({
    components: { AposInputsCheckbox },
    template: `<AposInputsCheckbox name="turtles" label="Donatello" value="does machines" indeterminate="true" checked="true"/>`
  }))
  .add('Checkbox (disabled)', () => ({
    components: { AposInputsCheckbox },
    template: `<AposInputsCheckbox name="turtles" label="Donatello" value="does machines" disabled="true"/>`
  }))
