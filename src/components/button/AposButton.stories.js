import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';

import AposButton from './AposButton.vue';

export default {
  title: 'Buttons',
  decorators: [withKnobs]
};

export const buttons = () => ({
  components: { AposButton },
  props: {
    disabled: {
      default: boolean('Disabled', false)
    },
    label: {
      default: text('Label', 'Filter')
    },
    busy: {
      default: boolean('Busy', false)
    },
    type: {
      default:
        select(
          'Type', {
            Default: null,
            Primary: 'primary',
            Outline: 'outline',
            Input: 'input'
          },
          null
        )
    },
    icon: {
      default:
        select(
          'Icon', {
            None: null,
            Label: 'Label',
            Menu: 'DotsVertical',
            Delete: 'Delete',
            'Empty Checkbox': 'CheckboxBlankOutline'
          },
          null
        )
    }
  },
  methods: {
    fakeBusy: function () {
      this.busy = true;
      setTimeout(() => {
        this.busy = false;
      }, 1000);
    }
  },
  template: `
    <AposButton
      @click="fakeBusy"
      :disabled="disabled"
      :label="label"
      :busy="busy"
      :type="type"
      :icon="icon"
    />
  `
});
