import { storiesOf } from '@storybook/vue'

import AppTitleOne from '../components/AppTitleOne.vue'

storiesOf('AppTitleOne', module)
  .add('with text light', () => ({
    components: { AppTitleOne },
    template: '<AppTitleOne theme="light" text="To make the Spätzle from scratch, pour flour, eggs, milk, salt, pepper, and nutmeg into a medium-sized bowl." />'
  }))
  .add('with text dark', () => ({
    components: { AppTitleOne },
    template: '<AppTitleOne theme="dark" text="To make the Spätzle from scratch, pour flour, eggs, milk, salt, pepper, and nutmeg into a medium-sized bowl." />'
  }))
