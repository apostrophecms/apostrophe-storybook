import { storiesOf } from '@storybook/vue'

import aposButton from './button.vue'

storiesOf('Button', module)
  .add('Default', () => ({
    components: { aposButton },
    template: '<aposButton label="Filter" />'
  }))
  .add('Default, Disabled', () => ({
    components: { aposButton },
    template: '<aposButton label="Filter" v-bind:disabled="true" />'
  }))
  .add('Primary', () => ({
    components: { aposButton },
    template: '<aposButton modifier="primary" label="Save Article" />'
  }))
  .add('Primary, Disabled', () => ({
    components: { aposButton },
    template: '<aposButton modifier="primary" label="Save Article" v-bind:disabled="true" />'
  }))
  .add('Input', () => ({
    components: { aposButton },
    template: '<aposButton label="Browse Articles" modifier="input" />'
  }))
  .add('Input, Disabled', () => ({
    components: { aposButton },
    template: '<aposButton label="Browse Articles" modifier="input" v-bind:disabled="true" />'
  }))
  .add('Danger', () => ({
    components: { aposButton },
    template: '<aposButton label="Delete Article" modifier="danger" />'
  }))
  .add('Danger, Disabled', () => ({
    components: { aposButton },
    template: '<aposButton label="Delete Article" modifier="danger" disabled=true />'
  }))
