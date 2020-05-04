import AposJoinInput from './AposJoinInput.vue';
import slatData from '../slat/data.js';

const field = {
  required: false,
  name: '_people',
  type: 'text',
  label: 'Join to People',
  browseLabel: 'Browse People'
};

export default {
  title: 'Input (Join)'
};

export const join = () => {
  return {
    components: {
      AposJoinInput
    },
    data() {
      return {
        field,
        listItems: slatData.items,
        status: {},
        value: {
          data: null
        }
      };
    },
    template: `<AposJoinInput 
      :field="field" 
      :value="value" 
      :status="status"
      :listItems="listItems"
    />`
  };
};
