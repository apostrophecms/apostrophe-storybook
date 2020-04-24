import AposSlatList from './AposSlatList.vue';
import data from './data.js';

export default {
  title: 'Slat List'
};

export const slatList = () => ({
  components: {
    AposSlatList
  },
  data() {
    return {
      items: data.items
    };
  },
  template: `<AposSlatList :items="items" />`
});
