import { storiesOf } from '@storybook/vue'

import aposModalTabs from './modalTabs.vue'

storiesOf('Modal Tabs', module)
  .add('Primary', () => ({
    components: { aposModalTabs },
    template: '<aposTag label="Politics" />'
  }))
