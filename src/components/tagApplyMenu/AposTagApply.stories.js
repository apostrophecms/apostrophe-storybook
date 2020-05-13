import AposTagApply from './AposTagApply.vue';
import data from './data.js';

export default {
  title: 'Tag Apply Tag Menu'
};

export const tagApplyTagMenu = () => ({
  components: {
    AposTagApply
  },
  methods: {
    log(value) {
      console.log('log');
      console.log(value);
    }
  },
  data() {
    return {
      tags: data.tags,
      applyTo: data.applyTo
    };
  },
  template: `<AposTagApply v-on:add-tag="log" :tags="tags" :applyTo="applyTo" v-on:update="log" />`
});
