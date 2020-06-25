import {
  withKnobs,
  text,
  boolean
} from '@storybook/addon-knobs';
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
  required: false,
  name: 'plancksConstant',
  type: 'text',
  label: 'What is Planck\'s constant?',
  placeholder: 'Enter the number.',
  help: 'Sing the Neverending Story theme song.'
};

const inputValue = { data: '' };
const inputStatus = {};
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

export const layouts = () => {
  const title = text('Modal Title', 'New Page');
  const hasBreadcrumbs = boolean('Has Breadcrumbs', true);
  const hasLeftRail = boolean('Has Left Rail', true);
  const hasRightRail = boolean('Has Right Rail', true);
  const hasBodyHeader = boolean('Has Body Header (Controls)', true);
  const hasSecondaryControls = boolean('Has Secondary Controls', true);
  const hasFooter = boolean('Has Footer', true);
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
        breadcrumbs,
        inputField,
        inputValue,
        inputStatus
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
              <AposBreadcrumb :items="breadcrumbs" @return-to="log" />
            </template>
          ` : ''}
          ${hasLeftRail ? `
          <template #leftRail>
            <AposModalRail>
              I am on the left
            </AposModalRail>
          </template>
        ` : ''}
          <template #main>
            <AposModalBody>
              ${hasBodyHeader ? `
                <template #bodyHeader>
                  <AposButton label="Exit" :iconOnly="true"  icon="Label" type="outline" />
                  <AposButton label="Exit" :iconOnly="true"  icon="dots-vertical-icon" type="outline" />
                  <AposButton label="Exit" :iconOnly="true"  icon="Delete" type="outline" />
                  <AposButton label="Exit" :iconOnly="true"  icon="CheckboxBlankOutline" type="outline" />
                </template>
              ` : ''}
              <template #bodyMain>
                <AposStringInput :field="inputField" :value="inputValue" :status="inputStatus" />
                <AposStringInput :field="inputField" :value="inputValue" :status="inputStatus" />
                <AposStringInput :field="inputField" :value="inputValue" :status="inputStatus" />
                <AposStringInput :field="inputField" :value="inputValue" :status="inputStatus" />
              </template>
            </AposModalBody>
          </template>
          ${hasRightRail ? `
          <template #rightRail>
            <AposModalRail type="right">
              I am on the right
            </AposModalRail>
          </template>
        ` : ''}
          ${hasFooter ? `
          <template #footer>
            I am the footer
          </template>
        ` : ''}
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
      <AposModal
        :modal="modal"
        @inactive="modal.active = false" @show-modal="modal.showModal = true"
        @esc="startExit"
      >
        <template #secondaryControls>
          <AposButton @click="startExit" label="Exit" />
        </template>
        <template #primaryControls>
          <AposButton modifier="primary" @click="startExit" label="Save Page" />
        </template>
        <template #breadcrumbs>
          <AposBreadcrumb :items="breadcrumbs" @return-to="log" />
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
    },
    log(target) {
      console.log(`Return to ${target}`);
    }
  }
});

export const slideOut = () => ({
  components: {
    AposModal,
    AposBreadcrumb,
    AposButton,
    AposModalBody,
    AposStringInput
  },
  data () {
    return {
      modal: {
        title: 'New Page',
        active: false,
        type: 'slide',
        showModal: false
      },
      breadcrumbs,
      inputField,
      inputValue,
      inputStatus
    };
  },
  template: `
    <div>
      <button type="button" class="apos-button" @click="startEnter">
        Activate modal
      </button>

      <AposModal
        :modal="modal"
        @inactive="modal.active = false" @show-modal="modal.showModal = true"
        @esc="startExit"
      >
        <template #secondaryControls>
          <AposButton @click="startExit" label="Exit" />
        </template>
        <template #primaryControls>
          <AposButton modifier="primary" @click="startExit" label="Save Page" />
        </template>
        <template #breadcrumbs>
          <AposBreadcrumb :items="breadcrumbs" @return-to="log" />
        </template>
        <template #main>
        <AposModalBody>
          <template #bodyMain>
            <AposStringInput :field="inputField" :value="inputValue" :status="inputStatus" />
            <AposStringInput :field="inputField" :value="inputValue" :status="inputStatus" />
            <AposStringInput :field="inputField" :value="inputValue" :status="inputStatus" />
            <AposStringInput :field="inputField" :value="inputValue" :status="inputStatus" />
          </template>
        </AposModalBody>
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
    },
    log(target) {
      console.log(`Return to ${target}`);
    }
  }
});
