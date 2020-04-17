import {
  withKnobs,
  text
} from '@storybook/addon-knobs';
import AposModal from '../modal/AposModal.vue';
import AposModalRail from '../modal/AposModalRail.vue';
import AposModalBody from '../modal/AposModalBody.vue';
import AposBreadcrumb from './../modalBreadcrumb/modalBreadcrumb.vue';
import AposButton from './../button/AposButton.vue';
// import AposStringInput from './../inputString/AposStringInput.vue';
import AposModalTabs from './AposModalTabs.vue';
import AposModalTabsBody from './AposModalTabsBody.vue';

export default {
  title: 'Modal with Tabs',
  decorators: [withKnobs]
};

const breadcrumbs = [
  {
    href: '#',
    label: 'Manage pages'
  },
  {
    href: '#',
    label: 'Another step'
  },
  {
    label: 'Link Page'
  }
];

export const tabs = () => {
  const title = text('Modal Title', 'New Piece');
  return {
    components: {
      AposModal,
      AposBreadcrumb,
      AposButton,
      AposModalRail,
      AposModalBody,
      AposModalTabs,
      AposModalTabsBody
    },
    methods: {
      switchPane(id) {
        this.currentTab = Number(id);
      }
    },
    mounted () {
      this.currentTab = Number(this.initialTab);
    },
    data () {
      return {
        currentTab: null,
        modal: {
          title: title,
          active: true,
          type: 'overlay',
          showModal: true
        },
        groups: [
          {
            name: 'admin',
            label: 'Admin',
            fields: [],
            uid: (Math.floor(Math.random() * Math.floor(10000)))
          },
          {
            name: 'basic',
            label: 'Basic stuff',
            fields: [],
            uid: (Math.floor(Math.random() * Math.floor(10000)))
          },
          {
            name: 'advanced',
            label: 'Advanced configuration',
            fields: [],
            uid: (Math.floor(Math.random() * Math.floor(10000)))
          },
          {
            name: 'seo',
            label: 'SEO',
            fields: [],
            uid: (Math.floor(Math.random() * Math.floor(10000)))
          }
        ],
        breadcrumbs
      };
    },
    computed: {
      initialTab () {
        return this.groups[0].uid;
      }
    },
    template: `
      <div>
        <button type="button" class="apos-button">
          Activate modal
        </button>
        <AposModal :modal="modal">
          <template #secondaryControls>
            <AposButton label="Exit" />
          </template>
          <template #primaryControls>
            <AposButton type="primary" label="Save Page" />
          </template>
          <template #breadcrumbs>
            <AposBreadcrumb :items="breadcrumbs" />
          </template>
          <template #leftRail>
            <AposModalRail>
              <AposModalTabs :groups="groups" v-on:selectTab="switchPane" />
            </AposModalRail>
          </template>
          <template #main>
            <AposModalBody>
              <template #bodyMain>
                <AposModalTabsBody :groups="groups" :current="currentTab" />
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
      `
  };
};
