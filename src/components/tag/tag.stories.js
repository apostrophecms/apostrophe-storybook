import { storiesOf } from '@storybook/vue'

import aposTag from './tag.vue'

storiesOf('Tag', module)
  .add('Standalone', () => ({
    components: { aposTag },
    template: '<aposTag label="Portrait" />'
  }))
  .add('List', () => ({
    components: { aposTag },
    template: '<aposTag label="Portrait" />'
  }))
