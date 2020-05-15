import {
  withKnobs,
  text,
  boolean
} from '@storybook/addon-knobs';
import AposModal from './../modal/AposModal.vue';
import AposModalRail from './../modal/AposModalRail.vue';
import AposModalBody from './../modal/AposModalBody.vue';
import AposModalFooter from './../modal/AposModalFooter.vue';
import AposBreadcrumb from './../modalBreadcrumb/modalBreadcrumb.vue';
import AposButton from './../button/AposButton.vue';
import AposStringInput from './../inputString/AposStringInput.vue';

export default {
  title: 'Media Manager',
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

export const mediaManager = () => {
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
      AposStringInput,
      AposModalFooter
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
              <AposBreadcrumb :items="breadcrumbs" />
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
                  <AposButton label="Exit" :iconOnly="true"  icon="DotsVertical" type="outline" />
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
            <AposModalFooter>
              I am the footer
            </AposModalFooter>
          </template>
        ` : ''}
        </AposModal>
      </div>
      `
  };
};

