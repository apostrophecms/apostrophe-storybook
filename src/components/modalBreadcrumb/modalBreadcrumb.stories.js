import { storiesOf } from '@storybook/vue'

import AposBreadcrumb from './modalBreadcrumb.vue'

storiesOf('Breadcrumb', module)
  .add('Primary', () => ({
    components: { AposBreadcrumb },
    template: '<AposBreadcrumb :items="items"/>',
    data () {
      return {
        items: [
          {
            href: '#',
            label: 'Breadcrumb 1'
          },
          {
            href: '#',
            label: 'Breadcrumb 2'
          },
          {
            href: '#',
            label: 'Breadcrumb 3'
          }
        ]
      }
    }
  }))
