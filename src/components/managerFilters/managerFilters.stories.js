import { storiesOf } from '@storybook/vue'

import aposManagerFilters from './managerFilters.vue'

storiesOf('Manager Filters', module)
  .add('Primary', () => ({
    components: { aposManagerFilters },
    template: '<aposTag label="Politics" />'
  }))
