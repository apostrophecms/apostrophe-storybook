## wip : Apostrophe Storybook

### Installation

```
$ npm install
```

### Getting Started

```
$ npm run storybook
```

### Unit Testing

Unit Tests can be written in [Jest](https://jestjs.io/) which is one of Vue's recommended testing frameworks. 

To run the test suite:

```
$ npm run test:unit
```

As a general rule of thumb, components should have tests that assert their public interface. For more on Vue's best practices regarding testing see: https://vue-test-utils.vuejs.org/guides/#common-tips.

### Deploying to the Static Site

```
$ npm run deploy-storybook
```

This script will run the build to the `.out` directory and trigger a deploy to the `gh-pages` branch.

### Using Vue Dev Tools with Storybook
Storybook operates in a number of layered iframes, obscuring Vue Dev Tools from reading your Vue states. You can use the standalone Electron Vue Dev Tool application to drill into your stories, just

```
$ npm install -g @vue/devtools
======================[100%]==
$ vue-devtools
```

And make sure the port your `vue-devtools` is looking for matches the one specified in `.storybook/preview-head.html`

### Technical Approach

 Storybook Configuration

- The main configuration file for Storybook can be found in `.storybook/config.js`.

Component Creation

- Each Vue component will have it's own `/src/stories/x.js` file that asserts variations of state. This includes theme variations.
- Each Vue component will have its' corresponding `.vue` file, located  in `/src/components/x.vue`. These will be single file components.
- The styles for these components will have both `light` and `dark` mode theme variations. Determining which mode to use will be determined by a variable passed as a prop to the component.

Global Styles

- Webpack is configured to scoop up `/src/scss/app.scss` which includes all global styles `@imports`. This leverages `sass-resources-loader`. These styles can be referenced from within single file component style declarations.
