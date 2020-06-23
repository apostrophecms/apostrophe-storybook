import { storiesOf } from '@storybook/vue';

import AposBreadcrumb from './modalBreadcrumb.vue';

storiesOf('Breadcrumb', module)
  .add('Primary', () => ({
    components: { AposBreadcrumb },
    template: `<AposBreadcrumb :items="items" @return-to="log" />`,
    data () {
      return {
        items: [
          {
            target: 'marquee-widget',
            label: 'Marquee'
          },
          {
            target: 'link-ui',
            label: 'Link'
          },
          {
            label: 'Link Page'
          }
        ]
      };
    },
    methods: {
      log(target) {
        console.log(`Return to ${target}`);
      }
    }
  }));
