import { storiesOf } from '@storybook/vue'

import AposModal from './AposModal.vue'
import AposBreadcrumb from './../modalBreadcrumb/modalBreadcrumb.vue'

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
]

storiesOf('Modal', module)
  .add('Primary', () => ({
    components: { AposModal, AposBreadcrumb },
    data () {
      return {
        modal: {
          title: 'New Page',
          active: false,
          type: 'overlay'
        },
        breadcrumbs: breadcrumbs
      }
    },
    template: `
    <div>
      <button type="button" class="apos-button" @click="toggleModal">
        Activate modal
      </button>
      <AposModal :modal="modal">
        <template #secondaryControls>
          <button class="apos-button apos-button--cancel" @click="toggleModal">Exit</button>
        </template>
        <template #primaryControls>
          <button class="apos-button">Save Page</button>
        </template>
        <template #breadcrumbs>
          <AposBreadcrumb :items="breadcrumbs" variant="dark" />
        </template>
      </AposModal>
    </div>
    `,
    methods: {
      toggleModal: function () {
        this.modal.active = !this.modal.active
      }
    }
  }))
