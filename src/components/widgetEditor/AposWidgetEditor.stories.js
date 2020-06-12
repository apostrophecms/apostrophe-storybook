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
        doc: data.doc,
        active: false,
        typeLabel,
        breadcrumbs: [
          {
            href: '#',
            label: 'Marquee'
          }
        ]
      };
    },
    template: `
    <div>
      <button type="button" class="apos-button" @click="toggleActive">
        Activate modal {{ active }}
      </button>
      <AposWidgetEditor
        v-if="active" :schema="schema" :doc="doc"
        :breadcrumbs="breadcrumbs" :typeLabel="typeLabel"
        @safe-close="finishExit"
      />
    </div>
    `,
    methods: {
      toggleActive: function () {
        this.active = !this.active;
      },
      finishExit: function () {
        this.active = false;
      }
    }
  };
};
