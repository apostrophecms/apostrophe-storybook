import { storiesOf } from '@storybook/vue'

import AposPopover from './AposPopover.vue'

let menu = [
  {
    label: 'New Page',
    action: 'new-page',
    busy: false
  },
  {
    label: 'New Event',
    action: 'new-event',
    busy: false
  },
  {
    label: 'New Project',
    action: 'new-project',
    busy: false
  },
  {
    label: 'New Staff Member',
    action: 'new-staff-member',
    busy: false
  },
  {
    label: 'New Article',
    action: 'new-article',
    busy: false
  }
]

storiesOf('Popover', module)
  .add('Default', () => ({
    components: { AposPopover },
    data () {
      return {
        menu
      }
    },
    template: `
      <AposPopover 
        alignment="right"
        v-bind:menu="menu"
        v-on:interacted="clicked"
      />
    `,
    methods: {
      clicked (action) {
        if (action) {
          console.log(menu)
          menu.forEach(item => {
            if (item.action === action) {
              item.busy = true;
            }
          })
          // menu = menu.map(item => {
          //   if (item.action === action) {
          //     item.busy = true
          //   }
          // })
        }
      }
    }
  }))
