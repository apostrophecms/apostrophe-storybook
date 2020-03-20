const { withContexts } = require('@storybook/addon-contexts/vue');
const { contexts } = require('./contexts');

module.exports = {
  stories: ['../src/components/**/*.stories.js'],
  addons: ['@storybook/addon-contexts/register'],
  decorators: [withContexts(contexts)]
}