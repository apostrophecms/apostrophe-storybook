import { storiesOf } from '@storybook/vue'

import aposTag from './tag.vue'
import aposIcon from '../icon/icon.vue'

storiesOf('Tag', module)
  .add('Standalone', () => ({
    components: { aposTag },
    template: '<aposTag label="Portrait" />'
  }))
  .add('List', () => ({
    components: { aposTag, aposIcon },
    template: `
      <ul class="apos-tag-list">
        <li>
          <aposTag label="Community">
            <template v-slot:icon>
              <aposIcon name="remove" />
            </template>
          </aposTag>
        </li>
        <li><aposTag removeIcon=true label="Neighborhood" /></li>
        <li><aposTag removeIcon=true label="Activism" /></li>
        <li><aposTag removeIcon=true label="What's Hot" /></li>
        <li><aposTag removeIcon=true label="Top 40" /></li>
      </ul>
    `
  }))
