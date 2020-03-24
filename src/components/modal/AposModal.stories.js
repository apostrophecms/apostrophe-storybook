import { withKnobs, text, boolean, select, object } from '@storybook/addon-knobs';
import AposModal from './AposModal.vue';
import AposBreadcrumb from './../modalBreadcrumb/modalBreadcrumb.vue';
import AposButton from './../button/AposButton.vue';
// import Vue from 'vue';

export default {
  title: 'All Modals',
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

export const layouts = () => ({
  components: {
    AposModal,
    AposBreadcrumb,
    AposButton
  },
  props: {
    label: {
      default: text('Label', 'Filter')
    },
    layout: {
      default:
        object('layout', {
          backgroundColor: 'red'
        })
    },
    hasSecondaryControls: {
      default: boolean('Has Secondary Controls', false)
    },
    icon: {
      default:
        select(
          'Icon', {
            None: null
          },
          null
        )
    }
  },
  data () {
    return {
      modal: {
        title: 'New Page',
        active: false,
        type: 'overlay',
        showModal: false
      },
      breadcrumbs: breadcrumbs
    };
  },
  template: `
    <div>
      <button type="button" class="apos-button" @click="startEnter">
        Activate modal
      </button>
      <AposModal :modal="modal" :hasSecondaryControls="hasSecondaryControls">
        <template #secondaryControls v-if="hasSecondaryControls">
          <AposButton @click="startExit" label="Exit" />
        </template>
        <template #primaryControls>
          <AposButton modifier="primary" @click="startExit" label="Save Page" />
        </template>
        <template #breadcrumbs>
          <AposBreadcrumb :items="breadcrumbs" />
        </template>
      </AposModal>
    </div>
    `
});

export const fullScreen = () => ({
  components: {
    AposModal,
    AposBreadcrumb,
    AposButton
  },
  data () {
    return {
      modal: {
        title: 'New Page',
        active: false,
        type: 'overlay',
        showModal: false
      },
      breadcrumbs: breadcrumbs
    };
  },
  template: `
    <div>
      <button type="button" class="apos-button" @click="startEnter">
        Activate modal
      </button>
      <AposModal :modal="modal" :hasSecondaryControls="hasSecondaryControls">
        <template #secondaryControls v-if="hasSecondaryControls">
          <AposButton @click="startExit" label="Exit" />
        </template>
        <template #primaryControls>
          <AposButton modifier="primary" @click="startExit" label="Save Page" />
        </template>
        <template #breadcrumbs>
          <AposBreadcrumb :items="breadcrumbs" />
        </template>
      </AposModal>
    </div>
    `,
  methods: {
    startEnter: function () {
      this.modal.active = true;
    },
    startExit: function () {
      this.modal.showModal = false;
    }
  }
});

// storiesOf('Modal', module)
//   .add('Overlay', () => (

//   ))
//   .add('Slide out', () => ({
//     components: {
//       AposModal,
//       AposBreadcrumb,
//       AposButton
//     },
//     data () {
//       return {
//         modal: {
//           title: 'New Page',
//           active: false,
//           type: 'slide',
//           showModal: false
//         },
//         breadcrumbs: breadcrumbs
//       };
//     },
//     template: `
//     <div>
//       <button type="button" class="apos-button" @click="startEnter">
//         Activate modal
//       </button>
//       <AposModal :modal="modal">
//         <template #secondaryControls>
//           <AposButton @click="startExit" label="Exit" />
//         </template>
//         <template #primaryControls>
//           <AposButton modifier="primary" @click="startExit" label="Save Page" />
//         </template>
//       </AposModal>
//     </div>
//     `,
//     methods: {
//       startEnter: function () {
//         this.modal.active = true;
//       },
//       startExit: function () {
//         this.modal.showModal = false;
//       }
//     }
//   }));
