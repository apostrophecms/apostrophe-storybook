import { storiesOf } from '@storybook/vue'

import aposNotification from './notification.vue'
import Dot from 'vue-material-design-icons/Circle.vue'
import Close from 'vue-material-design-icons/Close.vue'

// console.log(Circle)

storiesOf('Notification', module)
  .add('Success', () => ({
    components: { aposNotification, Dot, Close },
    template: `
      <aposNotification label="The article has been saved" modifier="success">
        <template v-slot:alertType>
          <span class="apos-notification__indicator">
            <Dot title="Success" :size=12 decorative=true fillColor="var(--success)" />
          </span>
        </template>
        <template v-slot:button>
          <button class="apos-notification__button">
            <Close title="Close Notification" :size="14" />
          </button>
        </template>
      </aposNotification>
    `
  }))
  .add('Danger', () => ({
    components: { aposNotification },
    template: '<aposNotification label="Something went wrong" modifier="danger" />'
  }))
  .add('Info', () => ({
    components: { aposNotification },
    template: '<aposNotification label="Something happened, that is all" modifier="info" />'
  }))
  .add('Warning', () => ({
    components: { aposNotification },
    template: '<aposNotification label="You should know this, but maybe it’s fine" modifier="warning" />'
  }))
