import { storiesOf } from '@storybook/vue';

import AposBreadcrumb from './modalBreadcrumb.vue';

storiesOf('Breadcrumb', module)
  .add('Primary', () => ({
    components: { AposBreadcrumb },
    template: '<AposBreadcrumb :items="items"/>',
    data () {
      return {
        items: [
          {
            href: '#',
            label: 'Marquee'
          },
          {
            href: '#',
            label: 'Link'
          },
          {
            label: 'Link Page'
          }
        ]
      };
    }
  }));
