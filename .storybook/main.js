module.exports = {
  stories: ['../src/components/**/*.stories.js'],
  addons: [
    '@storybook/addon-knobs',
    '@storybook/addon-contexts/register',
    '@storybook/addon-a11y/register'
  ]
}