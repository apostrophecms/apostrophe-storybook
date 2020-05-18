import { withKnobs } from '@storybook/addon-knobs';
import AposTable from './AposTable.vue';
import data from './data.js';

export default {
  title: 'Table',
  decorators: [withKnobs]
};

export const table = () => ({
  components: {
    AposTable
  },
  methods: {
    log(action) {
      console.log(`sort by ${action}`);
    }
  },
  data() {
    return {
      modal: {
        title: 'Manage Articles',
        active: true,
        type: 'overlay',
        showModal: true
      },
      headers: data.headers,
      rows: data.rows
    };
  },
  template: `<AposTable v-on:sort="log" :headers="headers" :rows="rows" />`
});
