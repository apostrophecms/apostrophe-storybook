import { storiesOf } from '@storybook/vue';
import data from './data.js';

import AposDocEditor from './AposDocEditor.vue';

storiesOf('Doc Editor', module)
  .add('Doc Editor', () => ({
    components: {
      AposDocEditor
    },
    data () {
      return {
        schema: data.schema,
        groups: data.groups,
        doc: data.doc,
        modal: {
          title: 'Edit Article',
          active: true,
          type: 'overlay',
          showModal: true
        }
      };
    },
    template: `<AposDocEditor :modal="modal" :schema="schema" :groups="groups" :doc="doc" />`,
    methods: {
      log (action) {
        console.log(`Story heard ${action} was clicked`);
      }
    }
  }));
