import AposJoinInput from './AposJoinInput.vue';

const field = {
  required: false,
  name: 'mashHousing',
  type: 'select',
  label: 'MASH housing?',
  choices: [
    {
      label: 'Mansion',
      value: 'mansion'
    },
    {
      label: 'Apartment',
      value: 'apartment'
    },
    {
      label: 'Shack',
      value: 'shack'
    },
    {
      label: 'House',
      value: 'house'
    }
  ]
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
