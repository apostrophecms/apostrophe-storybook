import { 
  withKnobs,
  select,
  boolean
} from '@storybook/addon-knobs';

import AposAreaMenu from './AposAreaMenu.vue';
import data from './data.js';

export default {
  title: 'Area Menu',
  decorators: [withKnobs]
};

export const areaMenu = () => {
  const menuFormat = boolean('Menu Items Grouped?', true);
  return {
    data() {
      return {
      };
    },
    computed: {
      menu() {
        if (menuFormat) {
          return data.menu;
        } else {
          return data.menu[1].items;
        }
      }
    },
    components: {
      AposAreaMenu
    },
    template: `<AposAreaMenu :menu="menu" />`
  };
};
