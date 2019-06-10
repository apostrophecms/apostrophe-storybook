import { storiesOf } from '@storybook/vue'

import aposNotification from './notification.vue'
import Dot from 'vue-material-design-icons/Circle.vue'
import Close from 'vue-material-design-icons/Close.vue'

storiesOf('Notification', module)
  .add('Success', () => ({
    components: { aposNotification, Dot, Close },
    template: `
      <aposNotification :clickable=true label="The article has been saved" modifier="apos-notification--success">
        <template v-slot:indicator>
          <Dot title="Success" :size=12 :decorative=true fillColor="var(--success)" />
        </template>
        <template v-slot:button>
          <Close title="Close Notification" :size="14" />
        </template>
      </aposNotification>
    `
  }))
  .add('Danger', () => ({
    components: { aposNotification, Dot, Close },
    template: `
    <aposNotification :clickable=true label="Something went wrong" modifier="apos-notification--danger">
      <template v-slot:indicator>
        <Dot title="Something went wrong" :size=12 :decorative=true fillColor="var(--danger)" />
      </template>
      <template v-slot:button>
        <Close title="Close Notification" :size="14" />
      </template>
    </aposNotification>
  `
  }))
  .add('Info', () => ({
    components: { aposNotification, Dot, Close },
    template: `
    <aposNotification :clickable=true label="Something happened, that is all" modifier="apos-notification--info">
      <template v-slot:indicator>
        <Dot :size=12 :decorative=true fillColor="var(--info)" />
      </template>
      <template v-slot:button>
        <Close title="Close Notification" :size="14" />
      </template>
    </aposNotification>
  `
  }))
  .add('Warning', () => ({
    components: { aposNotification, Dot, Close },
    template: `
    <aposNotification :clickable=true label="You should know this, but maybe it’s fine" modifier="apos-notification--warning">
      <template v-slot:indicator>
        <Dot :size=12 :decorative=true fillColor="var(--warning)" />
      </template>
      <template v-slot:button>
        <Close title="Close Notification" :size="14" />
      </template>
    </aposNotification>
  `
  }))
  .add('Not Clickable', () => ({
    components: { aposNotification, Dot, Close },
    template: `
    <aposNotification label="This notification is not clickable." modifier="apos-notification--success"></aposNotification>
  `
  }))
