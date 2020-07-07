import { withKnobs } from '@storybook/addon-knobs';
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
  methods: {},
  data() {
    return {
      data
    };
  },
  template: `
      <AposTable :data="data" />
    `
});
