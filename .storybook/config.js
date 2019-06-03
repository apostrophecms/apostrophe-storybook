import { configure } from '@storybook/vue'
const reqStories = require.context('../src/components', true, /\.js$/);


function loadStories() {
  document.body.className = 'apos-theme-' + (process.env.STORYBOOK_THEME || 'light')
  reqStories.keys().forEach(filename => reqStories(filename));
}

configure(loadStories, module)
