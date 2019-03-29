import { configure } from '@storybook/vue'

import Vue from 'vue'

// Import components
// Gotta make this niceer
import AppTitleOne from '../src/components/AppTitleOne.vue'
import button from '../src/components/button.vue'

const reqStories = require.context('../src/stories', true, /\.js$/);

// Register custom components.
// Gotta make this niceer
Vue.component('AppTitleOne', AppTitleOne)
Vue.component('button', button)

function loadStories() {
  document.body.className = 'apos-theme-' + (process.env.STORYBOOK_THEME || 'light')
  reqStories.keys().forEach(filename => reqStories(filename));
}

configure(loadStories, module)
