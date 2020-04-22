## wip : Apostrophe Storybook

### Installation

```
$ npm install
```

### Getting Started

```
$ npm run storybook
```

### Deploying to the Static Site

```
$ npm run deploy-storybook
```

This script will run the build to the `.out` directory and trigger a deploy to the `gh-pages` branch.

### Technical Approach

 Storybook Configuration

- The main configuration file for Storybook can be found in `.storybook/config.js`.

Component Creation

- Each Vue component will have it's own `/src/stories/x.js` file that asserts variations of state. This includes theme variations.
- Each Vue component will have its' corresponding `.vue` file, located  in `/src/components/x.vue`. These will be single file components.
- The styles for these components will have both `light` and `dark` mode theme variations. Determining which mode to use will be determined by a variable passed as a prop to the component.

Global Styles

- Webpack is configured to scoop up `/src/scss/app.scss` which includes all global styles `@imports`. This leverages `sass-resources-loader`. These styles can be referenced from within single file component style declarations.
