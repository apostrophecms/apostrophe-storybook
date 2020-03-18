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
  .add('Default, from below', () => ({
    components: { AposContextMenu },
    data () {
      return { menu }
    },
    template: `
      <div>
        <AposContextMenu 
          v-bind:menu="menu"
          v-on:itemClicked="log"
        />
        <AposContextMenu 
          tipAlignment="center"
          v-bind:menu="menu"
          v-on:itemClicked="log"
        />
          <AposContextMenu 
          tipAlignment="right"
          v-bind:menu="menu"
          v-on:itemClicked="log"
        />
      </div>
    `,
    methods: {
      log (action) {
        console.log(`Story heard ${action} was clicked`)
      }
    }
  }))
  .add('From above', () => ({
    components: { AposContextMenu },
    data () {
      return { menu }
    },
    template: `
      <div>
        <AposContextMenu 
          v-bind:menu="menu"
          v-on:itemClicked="log"
          origin="above"
        />
        <AposContextMenu 
          tipAlignment="center"
          v-bind:menu="menu"
          v-on:itemClicked="log"
          origin="above"
        />
          <AposContextMenu 
          tipAlignment="right"
          v-bind:menu="menu"
          v-on:itemClicked="log"
          origin="above"
        />
      </div>
    `,
    methods: {
      log (action) {
        console.log(`Story heard ${action} was clicked`)
      }
    }
  }))
