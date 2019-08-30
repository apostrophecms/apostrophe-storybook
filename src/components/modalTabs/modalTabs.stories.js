import { storiesOf } from '@storybook/vue'

import AposModalTabs from './modalTabs.vue'

storiesOf('Modal Tabs', module)
  .add('Primary', () => ({
    components: { AposModalTabs },
    data () {
      return {
        groups: [
          {
            name: 'admin',
            label: 'Admin',
            fields: []
          },
          {
            name: 'basic',
            label: 'Basic stuff',
            fields: []
          },
          {
            name: 'advanced',
            label: 'Advanced configuration',
            fields: []
          },
          {
            name: 'seo',
            label: 'SEO',
            fields: []
          }
        ]
      }
    },
    template: '<AposModalTabs :groups="groups" />'
  }))
