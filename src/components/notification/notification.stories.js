import { storiesOf } from '@storybook/vue'

import aposNotification from './notification.vue'

storiesOf('Notification', module)
  .add('Success', () => ({
    components: { aposNotification },
    template: '<aposNotification label="The article has been saved" modifier="success" />'
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
