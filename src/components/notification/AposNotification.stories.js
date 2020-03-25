import {
  withKnobs,
  text,
  select
} from '@storybook/addon-knobs';
import AposNotification from './AposNotification.vue';

export default {
  title: 'All Notifications',
  decorators: [withKnobs]
};

export const notifications = () => ({
  components: { AposNotification },
  props: {
    label: {
      default: text('Label', 'Few can name a disguised punch that isnt a bunchy railway.')
    },
    type: {
      default:
        select(
          'Type', {
            Default: null,
            Warning: 'warning',
            Success: 'success',
            Danger: 'danger'
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
            Alert: 'AlertCircle',
            Refresh: 'Refresh',
            Delete: 'Delete',
            'Double Check': 'CheckAll',
            'Check': 'CheckBold',
            'X': 'Close',
            'Empty Checkbox': 'CheckboxBlankOutline'
          },
          null
        )
    }
  },
  template: `
    <AposNotification 
      :label="label"
      :type="type"
      :icon="icon"
    />
  `
});
