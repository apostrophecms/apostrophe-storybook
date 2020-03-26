import { withKnobs, text, boolean, select, object } from '@storybook/addon-knobs';
import AposModal from './AposModal.vue';
import AposModalRail from './AposModalRail.vue';
import AposModalBody from './AposModalBody.vue';
import AposBreadcrumb from './../modalBreadcrumb/modalBreadcrumb.vue';
import AposButton from './../button/AposButton.vue';
import AposStringInput from './../inputString/AposStringInput.vue';

export default {
  title: 'Modals',
  decorators: [withKnobs]
};

const inputField = {
  mandatory: false,
  name: 'plancksConstant',
  type: 'text',
  label: 'What is Planck\'s constant?',
  placeholder: 'Enter the number.',
  help: 'Sing the Neverending Story theme song.'
};
const inputValue = {
  data: ''
};
const inputStatus = {};

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

export const layouts = () => {
  const title = text('Modal Title', 'New Page');
  const hasBreadcrumbs = boolean('Has Breadcrumbs', false);
  const hasLeftRail = boolean('Has Left Rail', true);
  const hasRightRail = boolean('Has Right Rail', true);
  const hasBodyHeader = boolean('Has Body Header (Controls)', false);
  const hasSecondaryControls = boolean('Has Secondary Controls', false);
  return {
    components: {
      AposModal,
      AposBreadcrumb,
      AposButton,
      AposModalRail,
      AposModalBody,
      AposStringInput
    },
    props: {

    },
    data () {
      return {
        modal: {
          title: title,
          active: true,
          type: 'overlay',
          showModal: true
        },
        breadcrumbs: breadcrumbs,
        inputField: inputField,
        inputValue: inputValue,
        inputStatus: inputStatus
      };
    },
    template: `
      <div>
        <button type="button" class="apos-button">
          Activate modal
        </button>
        <AposModal :modal="modal">
            ${hasSecondaryControls ? `
              <template #secondaryControls>
                <AposButton label="Exit" />
              </template>
          ` : ''}
          <template #primaryControls>
            <AposButton type="primary" label="Save Page" />
          </template>
          ${hasBreadcrumbs ? `
            <template #breadcrumbs>
              <AposBreadcrumb :items="breadcrumbs" />
            </template>
          ` : ''}
          <template #main>
            ${hasLeftRail ? `
              <AposModalRail type="left">
                I am on the left
              </AposModalRail>
            ` : ''}
            <AposModalBody>
              ${hasBodyHeader ? `
                <template #bodyHeader>
                  <AposButton label="Exit" :iconOnly="true"  icon="Delete" type="outline" />
                  <AposButton label="Exit" :iconOnly="true"  icon="Delete" type="outline" />
                  <AposButton label="Exit" :iconOnly="true"  icon="Delete" type="outline" />
                </template>
              ` : ''}
              <template #bodyMain>
                <AposStringInput :field="inputField" :value="inputValue" :status="inputStatus" />
                <AposStringInput :field="inputField" :value="inputValue" :status="inputStatus" />
                <AposStringInput :field="inputField" :value="inputValue" :status="inputStatus" />
              </template>
            </AposModalBody>
            ${hasRightRail ? `
              <AposModalRail type="right">
                I am on the right
              </AposModalRail>
            ` : ''}
          </template>
        </AposModal>
      </div>
      `
  };
};

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
