import { storiesOf } from '@storybook/vue'

import aposButton from '../components/button.vue'

storiesOf('Button', module)
  .add('Primary', () => ({
    components: { aposButton },
    template: '<aposButton label="Save Article" />'
  }))
  .add('Primary, Disabled', () => ({
    components: { aposButton },
    template: '<aposButton label="Save Article" disabled=true />'
  }))
  .add('Secondary', () => ({
    components: { aposButton },
    template: '<aposButton label="Browse Articles" modifier="secondary" />'
  }))
  .add('Secondary, Disabled', () => ({
    components: { aposButton },
    template: '<aposButton label="Browse Articles" modifier="secondary" disabled="true" />'
  }))
  .add('Cancel', () => ({
    components: { aposButton },
    template: '<aposButton label="Cancel" modifier="cancel" />'
  }))
  .add('Cancel, Disabled', () => ({
    components: { aposButton },
    template: '<aposButton label="Cancel" modifier="cancel" disabled="true" />'
  }))
  .add('Danger', () => ({
    components: { aposButton },
    template: '<aposButton label="Deleta Article" modifier="danger" />'
  }))
  .add('Danger, Disabled', () => ({
    components: { aposButton },
    template: '<aposButton label="Deleta Article" modifier="danger" disabled="true" />'
  }))
