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
      // Do extra JSON work since `value` will come through with `getter` and
      // `setter` functions.
      console.table(JSON.parse(JSON.stringify(value)));
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
