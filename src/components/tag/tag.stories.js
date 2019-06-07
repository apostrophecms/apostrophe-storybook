import { storiesOf } from '@storybook/vue'
import Close from 'vue-material-design-icons/Close.vue'

import aposTag from './tag.vue'
// import aposIcon from '../icon/icon.vue'

storiesOf('Tag', module)
  .add('Standalone', () => ({
    components: { aposTag },
    template: '<aposTag label="Portrait" />'
  }))
  .add('List', () => ({
    components: { aposTag, Close },
    template: `
      <ul class="apos-tag-list">
        <li>
          <aposTag label="Community">
            <template v-slot:icon>
              <button class="apos-tag-button">
                <Close title="Remove Tag" :size="14" />
              </button>
            </template>
          </aposTag>
        </li>
        <li>
          <aposTag label="Neighborhood">
            <template v-slot:icon>
              <button class="apos-tag-button">
                <Close title="Remove Tag" :size="14" />
              </button>
            </template>
          </aposTag>
        </li>
        <li>
          <aposTag label="Activism">
            <template v-slot:icon>
              <button class="apos-tag-button">
                <Close title="Remove Tag" :size="14" />
              </button>
            </template>
          </aposTag>
        </li>
        <li>
          <aposTag label="What's Hot">
            <template v-slot:icon>
              <button class="apos-tag-button">
                <Close title="Remove Tag" :size="14" />
              </button>
            </template>
          </aposTag>
        </li>
        <li>
          <aposTag label="Top 40">
            <template v-slot:icon>
              <button class="apos-tag-button">
                <Close title="Remove Tag" :size="14" />
              </button>
            </template>
          </aposTag>
        </li>
      </ul>
    `
  }))
