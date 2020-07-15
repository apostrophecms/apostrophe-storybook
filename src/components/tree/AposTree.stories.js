import { withKnobs } from '@storybook/addon-knobs';

import AposTree from './AposTree.vue';
import data from './data';

export default {
  title: 'Tree',
  decorators: [withKnobs]
};

export const Tree = () => ({
  components: { AposTree },
  data() {
    return { data };
  },
  template: '<AposTree :data="data" />'
});
