import { withKnobs, boolean } from '@storybook/addon-knobs';

import AposTable from './AposTable.vue';

import data from './data.js';

export default {
  title: 'Table',
  decorators: [withKnobs]
};

export const Table = () => ({
  components: {
    AposTable
  },
  data() {
    return {
      data,
      selectable: false,
      tree: false
    };
  },
  props: {
    selectable: {
      default: boolean('Selectable', false)
    }
  },
  template: `
    <AposTable
      :data="data"
      :selectable="selectable"
    />
  `
});
