import { storiesOf } from '@storybook/vue'

import AposButton from './AposButton.vue'

// NOTE: This mixin is applied to the story components, not the button
// components. This mimics a modal component with buttons, for example.
const mixin = {
  components: { AposButton },
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
      }, 5000)
    }
  }
}

storiesOf('Button', module)
  .add('Default', () => ({
    template: `
      <AposButton
        @click="fakeBusy"
        v-bind:busy="busy"
        label="Filter"
      />
    `,
    ...mixin
  }))
  .add('Default, Disabled', () => ({
    template: `
      <AposButton
        @click="fakeBusy"
        label="Filter"
        v-bind:disabled="true"
      />
    `,
    ...mixin
  }))
  .add('Default, Busy', () => ({
    template: `
      <AposButton
        @click="fakeBusy"
        label="Filter"
        v-bind:busy="true"
      />
    `,
    ...mixin
  }))
  .add('Default, with icon', () => ({
    template: `
      <AposButton
        @click="fakeBusy"
        v-bind:busy="busy"
        label="Tags"
        icon="Label"
      />
    `,
    ...mixin
  }))
  .add('Outline, icons only', () => ({
    template: `
      <div>
        <AposButton
          @click="fakeBusy"
          v-bind:busy="busy"
          v-bind:modifiers='["outline"]'
          icon="CheckboxBlankOutline"
        />
        <AposButton
          @click="fakeBusy"
          v-bind:busy="busy"
          v-bind:modifiers='["outline"]'
          icon="Label"
        />
        <AposButton
          @click="fakeBusy"
          v-bind:busy="busy"
          v-bind:modifiers='["outline"]'
          icon="Delete"
        />
        <AposButton
          @click="fakeBusy"
          v-bind:busy="busy"
          v-bind:modifiers='["outline"]'
          icon="DotsVertical"
        />
      </div>
    `,
    ...mixin
  }))
  .add('Primary', () => ({
    template: `
      <AposButton
        @click="fakeBusy"
        v-bind:busy="busy"
        v-bind:modifiers='["primary"]'
        label="Save Article"
      />`,
    ...mixin
  }))
  .add('Primary, Disabled', () => ({
    template: `
      <AposButton
        @click="fakeBusy"
        v-bind:modifiers='["primary"]'
        label="Save Article"
        v-bind:disabled="true"
      />
      `,
    ...mixin
  }))
  .add('Input', () => ({
    template: `
      <AposButton
        @click="fakeBusy"
        v-bind:busy="busy"
        label="Browse Articles"
        v-bind:modifiers='["input"]'
      />
    `,
    ...mixin
  }))
  .add('Input, Disabled', () => ({
    template: `
      <AposButton
        @click="fakeBusy"
        label="Browse Articles"
        v-bind:modifiers='["input"]'
        v-bind:disabled="true"
      />
    `,
    ...mixin
  }))
  .add('Danger', () => ({
    template: `
      <AposButton
        @click="fakeBusy"
        v-bind:busy="busy"
        label="Delete Article"
        v-bind:modifiers='["danger"]'
      />
    `,
    ...mixin
  }))
  .add('Danger, Disabled', () => ({
    template: `
      <AposButton
        @click="fakeBusy"
        label="Delete Article"
        v-bind:modifiers='["danger"]'
        v-bind:disabled="true"
      />
    `,
    ...mixin
  }))
