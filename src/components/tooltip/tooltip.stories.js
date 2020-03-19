import { storiesOf } from '@storybook/vue';

import aposTooltip from './tooltip.vue';

storiesOf('Tooltip', module)
  .add('Primary', () => ({
    components: { aposTooltip },
    template: '<aposTag label="Politics" />'
  }));
