import { storiesOf } from '@storybook/vue'

import aposToggle from './toggle.vue'

storiesOf('Toggle', module)
  .add('Published', () => ({
    components: { aposToggle },
    data () {
      return {
        items: [
          {
            name: 'published',
            id: 'published',
            value: 'true',
            label: 'Published',
            checked: true
          },
          {
            name: 'published',
            id: 'unpublished',
            value: 'false',
            label: 'Unpublished'
          }
        ]
      }
    },
    template: '<aposToggle :items="items" />'
  }))
