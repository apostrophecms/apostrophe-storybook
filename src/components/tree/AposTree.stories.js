import { withKnobs } from '@storybook/addon-knobs';
// import { text } from '@storybook/addon-knobs';

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
  props: {
    // label: {
    //   default: text('Label', 'Neighborhood')
    // },
    // slug: {
    //   default: text('Slug', 'neighborhood')
    // }
  },
  template: '<AposTree :data="data" />'
});
