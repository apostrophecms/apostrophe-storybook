import { storiesOf } from '@storybook/vue'

import AposContextMenu from './AposContextMenu.vue'

let menu = [
  {
    label: 'New Page',
    action: 'new-page'
  },
  {
    label: 'New Event',
    action: 'new-event'
  },
  {
    label: 'New Project',
    action: 'new-project'
  },
  {
    label: 'New Staff Member',
    action: 'new-staff-member'
  },
  {
    label: 'New Article',
    action: 'new-article'
  }
]

storiesOf('Context Menu', module)
  .add('Default', () => ({
    components: { AposContextMenu },
    data () {
      return { menu }
    },
    template: `
      <AposContextMenu 
        v-bind:menu="menu"
        v-on:itemClicked="log"
      />
    `,
    methods: {
      log (action) {
        console.log(`Story heard ${action} was clicked`)
      }
    }
  }))
  .add('Center', () => ({
    components: { AposContextMenu },
    data () {
      return { menu }
    },
    template: `
      <AposContextMenu 
        alignment="center"
        v-bind:menu="menu"
        v-on:itemClicked="log"
      />
    `,
    methods: {
      log (action) {
        console.log(`Story heard ${action} was clicked`)
      }
    }
  }))
  .add('Right', () => ({
    components: { AposContextMenu },
    data () {
      return { menu }
    },
    template: `
      <AposContextMenu 
        alignment="right"
        v-bind:menu="menu"
        v-on:itemClicked="log"
      />
    `,
    methods: {
      log (action) {
        console.log(`Story heard ${action} was clicked`)
      }
    }
  }))
