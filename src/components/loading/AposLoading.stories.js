import AposSpinner from './AposSpinner.vue';
import AposLoading from './AposLoading.vue';

export default {
  title: 'Loading States'
};

export const spinner = () => {
  return {
    components: { AposSpinner },
    template: `
      <AposSpinner />`
  };
};

export const loading = () => {
  return {
    components: { AposLoading },
    template: `
      <AposLoading />`
  };
};
