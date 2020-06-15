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
        typeLabel: 'Article',
        active: true
      };
    },
    template: `
    <div>
      <button type="button" class="apos-button" @click="toggleActive">
        Activate modal
      </button>
      <AposDocEditor
        v-if="active" @safe-close="finishExit" :typeLabel="typeLabel"
        :schema="schema" :groups="groups" :doc="doc"
      />
    </div>
    `,
    methods: {
      log (action) {
        console.log(`Story heard ${action} was clicked`);
      },
      toggleActive: function () {
        this.active = !this.active;
      },
      finishExit: function () {
        this.active = false;
      }
    }
  }));
