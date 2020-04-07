import { 
  withKnobs, text, boolean, select, optionsKnob as options
} from '@storybook/addon-knobs';

import AposButton from './AposButton.vue';

export default {
  title: 'All Buttons',
  decorators: [withKnobs]
};

// const g = ;

// const label = 'Fruits';
// const valuesObj = {
//   fruit: 'kiwi',
//   Guava: 'guava',
//   Watermelon: 'watermelon'
// };
// const defaultValue = ['kiwi'];
// const optionsObj = {
//   display: 'multi-select'
// };
// const groupId = null;
// const value = options(label, valuesObj, defaultValue, optionsObj, groupId);

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
            Input: 'input',
            Danger: 'danger'
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
    },
    modifiers: {
      default: options('Modifiers', {
        'Danger on Hover': 'danger-on-hover',
        'Block': 'block',
        'Gradient on Hover': 'gradient-on-hover'
      },
      [],
      { display: 'multi-select' },
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
      v-bind:modifiers="modifiers"
    />
  `
});
