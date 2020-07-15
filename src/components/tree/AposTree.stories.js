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
  methods: {
    setBusy(val) {
      console.info('Busy state is ', val);
    },
    update(obj) {
      // We'll hit a route here to update the docs.
      console.info('CHANGED ROW:', obj);
    }
  },
  template: '<AposTree :data="data" @update="update" @busy="setBusy" />'
});
