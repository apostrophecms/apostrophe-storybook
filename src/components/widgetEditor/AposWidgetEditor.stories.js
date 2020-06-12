import {
  withKnobs
} from '@storybook/addon-knobs';
import AposWidgetEditor from './AposWidgetEditor.vue';
import data from './data.js';

export default {
  title: 'Widget Editor ',
  decorators: [withKnobs]
};

export const widgetEditor = () => {
  return {
    components: {
      AposWidgetEditor
    },
    data () {
      return {
        schema: data.schema,
        groups: data.groups,
        doc: data.doc,
        modal: {
          title: 'Edit Marquee',
          active: true,
          type: 'slide',
          showModal: true
        }
      };
    },
    template: `<AposWidgetEditor :modal="modal" :schema="schema" :groups="groups" :doc="doc" />`
  };
};
