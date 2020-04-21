import AposJoinInput from './AposJoinInput.vue';

const field = {
  required: false,
  name: '_people',
  type: 'join',
  label: 'Join to People',
  browseLabel: 'Browse People'
};

export default {
  title: 'Input (Join)'
};

export const join = () => {
  return {
    components: { AposJoinInput },
    data() {
      return {
        field,
        status: {},
        value: {
          data: null
        }
      };
    },
    template: `<AposJoinInput :field="field" :value="value" :status="status"/>`
  };
};
