import { withKnobs } from '@storybook/addon-knobs';
import test from './test.vue';
import data from './data.js';

export default {
  title: 'Test',
  decorators: [withKnobs]
};

export const testStory = () => ({
  components: {
    test
  },
  methods: {
    log(action) {
      console.log(`sort by ${action}`);
    }
  },
  data() {
    return {
      rows: data.rows
    };
  },
  template: `<test :rows="rows" />`
});
