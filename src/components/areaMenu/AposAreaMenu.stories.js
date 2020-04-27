import { 
  withKnobs, select
} from '@storybook/addon-knobs';

import AposAreaMenu from './AposAreaMenu.vue';
import data from './data.js';

export default {
  title: 'Area Menu',
  decorators: [withKnobs]
};

export const areaMenu = () => {
  const choice = select(
    'List Type', {
      Groups: 'groups',
      List: 'list'
    },
    null
  );
  return {
    data() {
      return {
        groups: null,
        items: null
      };
    },
    components: {
      AposAreaMenu
    },
    mounted() {
      if (choice === 'groups' || !choice) {
        this.groups = data.groups;
      } else {
        this.items = data.list;
      }
    },
    template: `<AposAreaMenu :items="items" :groups="groups" />`
  };
};
