import AposFilterMenu from './AposFilterMenu.vue';
import data from './data.js';

export default {
  title: 'Filter Context Menu'
};

export const filterContextMenu = () => ({
  components: {
    AposFilterMenu
  },
  methods: {
    log(name, value) {
      console.log(`log: ${name} = ${value.data}`);
    }
  },
  data() {
    return {
      menu: data.menu,
      button: data.button
    };
  },
  template: `<AposFilterMenu :button="button" :menu="menu" @input="log" />`
});
