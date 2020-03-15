import { storiesOf } from '@storybook/vue'

import AposButton from './AposButton.vue'
const mixin = {
  data () {
    return {
      busy: false
    }
  },
  methods: {
    fakeBusy: function () {
      this.busy = true
      setTimeout(() => {
        this.busy = false
      }, 1000)
    }
  }
}

storiesOf('Button', module)
  .add('Default', () => ({
    components: { AposButton },
    template: '<AposButton @click="fakeBusy" v-bind:busy="busy" label="Filter" />',
    ...mixin
  }))
  .add('Default, Disabled', () => ({
    components: { AposButton },
    template: '<AposButton @click="fakeBusy" label="Filter" v-bind:disabled="true" />',
    ...mixin
  }))
  .add('Default, Busy', () => ({
    components: { AposButton },
    template: '<AposButton @click="fakeBusy" label="Filter" v-bind:busy="true" />',
    ...mixin
  }))
  .add('Primary', () => ({
    components: { AposButton },
    template: '<AposButton @click="fakeBusy" v-bind:busy="busy" modifier="primary" label="Save Article" />',
    ...mixin
  }))
  .add('Primary, Disabled', () => ({
    components: { AposButton },
    template: '<AposButton @click="fakeBusy" modifier="primary" label="Save Article" v-bind:disabled="true" />',
    ...mixin
  }))
  .add('Input', () => ({
    components: { AposButton },
    template: '<AposButton @click="fakeBusy" v-bind:busy="busy" label="Browse Articles" modifier="input" />',
    ...mixin
  }))
  .add('Input, Disabled', () => ({
    components: { AposButton },
    template: '<AposButton @click="fakeBusy" label="Browse Articles" modifier="input" v-bind:disabled="true" />',
    ...mixin
  }))
  .add('Danger', () => ({
    components: { AposButton },
    template: '<AposButton @click="fakeBusy" v-bind:busy="busy" label="Delete Article" modifier="danger" />',
    ...mixin
  }))
  .add('Danger, Disabled', () => ({
    components: { AposButton },
    template: '<AposButton @click="fakeBusy" label="Delete Article" modifier="danger" v-bind:disabled="true" />',
    ...mixin
  }))
