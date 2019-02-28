import { storiesOf } from '@storybook/vue';

import Button from './Button.vue';

storiesOf('Button', module)
  .add('story as a template', () => '<my-button :rounded="true">story as a function template</my-button>')
  .add('story as a component', () => ({
    components: { Button },
    template: '<my-button :rounded="true">rounded</my-button>'
  }));
