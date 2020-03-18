import { storiesOf } from '@storybook/vue'

import AposButton from './AposButton.vue'

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
      }, 1000)
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
    mixins: [mixin]
  }))
  .add('Default, Disabled', () => ({
    template: `
      <AposButton
        @click="fakeBusy"
        label="Filter"
        v-bind:disabled="true"
      />
    `,
    mixins: [mixin]
  }))
  .add('Default, Busy', () => ({
    template: `
      <AposButton
        @click="fakeBusy"
        label="Filter"
        v-bind:busy="true"
      />
    `,
    mixins: [mixin]
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
    mixins: [mixin]
  }))
  .add('Outline, icons only', () => ({
    template: `
      <div>
        <AposButton
          v-on:click="handler"
          v-bind:busy="selectAllBusy"
          v-bind:modifiers='["outline"]'
          icon="CheckboxBlankOutline"
          action="selectAll"
        />
        <AposButton
          v-on:click="handler"
          v-bind:busy="addTagBusy"
          v-bind:modifiers='["outline"]'
          icon="Label"
          action="addTag"
        />
        <AposButton
          v-on:click="handler"
          v-bind:busy="deleteBusy"
          action="delete"
          v-bind:modifiers='["outline"]'
          icon="Delete"
        />
        <AposButton
          v-on:click="handler"
          v-bind:busy="openMenuBusy"
          action="openMenu"
          v-bind:modifiers='["outline"]'
          icon="DotsVertical"
        />
      </div>
    `,
    components: { AposButton },
    data () {
      return {
        selectAllBusy: false,
        addTagBusy: false,
        deleteBusy: false,
        openMenuBusy: false
      }
    },
    methods: {
      busy (button) {
        this[`${button}Busy`] = true
        setTimeout(() => {
          this[`${button}Busy`] = false
        }, 1000)
      },
      handler (button) {
        console.log(`${button} was clicked`)
        this[button]()
      },
      selectAll () {
        console.log('special select All func')
        this.busy('selectAll')
      },
      delete () {
        console.log('special delete func')
        this.busy('delete')
      },
      openMenu () {
        console.log('special open menu func')
        this.busy('openMenu')
      },
      addTag () {
        console.log('special add tag func')
        this.busy('addTag')
      }
    }
  }))
  .add('Primary', () => ({
    template: `
      <AposButton
        @click="fakeBusy"
        v-bind:busy="busy"
        v-bind:modifiers='["primary"]'
        label="Save Article"
      />`,
    mixins: [mixin]
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
    mixins: [mixin]
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
    mixins: [mixin]
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
    mixins: [mixin]
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
    mixins: [mixin]
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
    mixins: [mixin]
  }))
