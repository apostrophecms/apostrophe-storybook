import {
  withKnobs,
  text
} from '@storybook/addon-knobs';
import AposModal from '../modal/AposModal.vue';
import AposModalRail from '../modal/AposModalRail.vue';
import AposModalBody from '../modal/AposModalBody.vue';
import AposBreadcrumb from './../modalBreadcrumb/modalBreadcrumb.vue';
import AposButton from './../button/AposButton.vue';
import AposModalTabs from './AposModalTabs.vue';
import AposModalTabsBody from './AposModalTabsBody.vue';
import AposModalTabsMixin from '../../mixins/AposModalTabsMixin';

export default {
  title: 'Modal with Tabs',
  decorators: [withKnobs]
};

const breadcrumbs = [
  {
    target: 'pages-manager',
    label: 'Manage pages'
  },
  {
    target: 'another-step',
    label: 'Another step'
  },
  {
    label: 'Link Page'
  }
];

export const tabs = () => {
  const title = text('Modal Title', 'New Piece');
  return {
    mixins: [ AposModalTabsMixin ],
    components: {
      AposModal,
      AposBreadcrumb,
      AposButton,
      AposModalRail,
      AposModalBody,
      AposModalTabs,
      AposModalTabsBody
    },
    data () {
      return {
        modal: {
          title: title,
          active: true,
          type: 'overlay',
          showModal: true
        },
        tabs: [
          {
            name: 'admin',
            label: 'Admin',
            fields: []
          },
          {
            name: 'basic',
            label: 'Basic stuff',
            fields: []
          },
          {
            name: 'advanced',
            label: 'Advanced configuration',
            fields: []
          },
          {
            name: 'seo',
            label: 'SEO',
            fields: []
          }
        ],
        breadcrumbs
      };
    },
    template: `
      <div>
        <AposModal :modal="modal">
          <template #secondaryControls>
            <AposButton label="Exit" />
          </template>
          <template #primaryControls>
            <AposButton type="primary" label="Save Page" />
          </template>
          <template #breadcrumbs>
            <AposBreadcrumb :items="breadcrumbs" @return-to="log" />
          </template>
          <template #leftRail>
            <AposModalRail>
              <AposModalTabs :current="currentTab" :tabs="tabs" v-on:select-tab="switchPane" />
            </AposModalRail>
          </template>
          <template #main>
            <AposModalBody>
              <template #bodyMain>
                <AposModalTabsBody>
                  Content for {{ currentTab }}
                </AposModalTabsBody>
              </template>
            </AposModalBody>
          </template>
          <template #rightRail>
            <AposModalRail type="right">
              I am on the right
            </AposModalRail>
          </template>
        </AposModal>
      </div>
    `,
    methods: {
      log(target) {
        console.log(`Return to ${target}`);
      }
    }
  };
};
