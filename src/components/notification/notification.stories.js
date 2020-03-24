import {
  withKnobs,
  text,
  boolean,
  select
} from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import AposNotification from './notification.vue';

export default {
  title: 'All Notifications',
  decorators: [withKnobs, withA11y]
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
    clickable: {
      default: boolean('Clickable', false)
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
      :clickable=clickable
      :label="label"
      :type="type"
      :icon="icon"
    />
  `
});
