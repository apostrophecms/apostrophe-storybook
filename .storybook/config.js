import { configure } from '@storybook/vue'

import Vue from 'vue'

// Import components
import AppTitleOne from '../src/components/AppTitleOne.vue'

const req = require.context('../src/stories', true, /\.js$/);

// Register custom components.
Vue.component('AppTitleOne', AppTitleOne)

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module)
