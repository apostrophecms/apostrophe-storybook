import { storiesOf } from '@storybook/vue';

import aposManagerSearchBar from './managerSearchBar.vue';

storiesOf('Manager Search Bar', module)
  .add('Primary', () => ({
    components: { aposManagerSearchBar },
    template: '<aposTag label="Politics" />'
  }));
