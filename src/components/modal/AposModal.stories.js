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
  .add('Overlay', () => ({
    components: { AposModal, AposBreadcrumb },
    data () {
      return {
        modal: {
          title: 'New Page',
          active: false,
          type: 'overlay',
          showModal: false
        },
        breadcrumbs: breadcrumbs
      }
    },
    template: `
    <div>
      <button type="button" class="apos-button" @click="startEnter">
        Activate modal
      </button>
      <AposModal :modal="modal">
        <template #secondaryControls>
          <button class="apos-button apos-button--cancel" @click="startExit">Exit</button>
        </template>
        <template #primaryControls>
          <button class="apos-button">Save Page</button>
        </template>
        <template #breadcrumbs>
          <AposBreadcrumb :items="breadcrumbs" />
        </template>
      </AposModal>
    </div>
    `,
    methods: {
      startEnter: function () {
        this.modal.active = true
      },
      startExit: function () {
        this.modal.showModal = false
      }
    }
  }))
  .add('Overlay (dark breadcrumbs', () => ({
    components: { AposModal, AposBreadcrumb },
    data () {
      return {
        modal: {
          title: 'New Page',
          active: false,
          type: 'overlay',
          showModal: false
        },
        breadcrumbs: breadcrumbs
      }
    },
    template: `
    <div>
      <button type="button" class="apos-button" @click="startEnter">
        Activate modal
      </button>
      <AposModal :modal="modal">
        <template #secondaryControls>
          <button class="apos-button apos-button--cancel" @click="startExit">Exit</button>
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
      startEnter: function () {
        this.modal.active = true
      },
      startExit: function () {
        this.modal.showModal = false
      }
    }
  }))
  .add('Slide out', () => ({
    components: { AposModal, AposBreadcrumb },
    data () {
      return {
        modal: {
          title: 'New Page',
          active: false,
          type: 'slide',
          showModal: false
        },
        breadcrumbs: breadcrumbs
      }
    },
    template: `
    <div>
      <button type="button" class="apos-button" @click="startEnter">
        Activate modal
      </button>
      <AposModal :modal="modal">
        <template #secondaryControls>
          <button class="apos-button apos-button--cancel" @click="startExit">Exit</button>
        </template>
        <template #primaryControls>
          <button class="apos-button">Save Page</button>
        </template>
      </AposModal>
    </div>
    `,
    methods: {
      startEnter: function () {
        this.modal.active = true
      },
      startExit: function () {
        this.modal.showModal = false
      }
    }
  }))
