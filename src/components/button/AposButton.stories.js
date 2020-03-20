import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';

import AposButton from './AposButton.vue';

export default {
  title: 'All Buttons',
  decorators: [withKnobs]
};

export const buttons = () => ({
  components: { AposButton },
  props: {
    label: {
      default: text('Label', 'Filter')
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
    disabled: {
      default: boolean('Disabled', false)
    },
    busy: {
      default: boolean('Busy', false)
    },
    iconOnly: {
      default: boolean('Icon Only', false)
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
  template: `
    <AposButton
      :disabled="disabled"
      :label="label"
      :busy="busy"
      :type="type"
      :icon="icon"
      :iconOnly="iconOnly"
    />
  `
});
