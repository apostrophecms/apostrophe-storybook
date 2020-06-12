import {
  withKnobs
} from '@storybook/addon-knobs';
import AposWidgetEditor from './AposWidgetEditor.vue';
import data from './data.js';

export default {
  title: 'Widget Editor ',
  decorators: [withKnobs]
};

const typeLabel = 'Marquee';

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
        typeLabel,
        modal: {
          title: `Edit ${typeLabel}`,
          active: true,
          type: 'slide',
          showModal: true
        },
        breadcrumbs: [
          {
            href: '#',
            label: 'Marquee'
          }
        ]
      };
    },
    template: `
    <AposWidgetEditor
      :modal="modal" :schema="schema" :groups="groups" :doc="doc"
      :breadcrumbs="breadcrumbs" :typeLabel="typeLabel"
    />`
  };
};
