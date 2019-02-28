import { storiesOf } from '@storybook/vue'

import AppTitleOne from '../components/AppTitleOne.vue'

storiesOf('AppTitleOne', module)
  .add('with text', () => ({
    components: { AppTitleOne },
    template: '<AppTitleOne text="To make the Spätzle from scratch, pour flour, eggs, milk, salt, pepper, and nutmeg into a medium-sized bowl." />'
  }))
