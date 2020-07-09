<template>
  <AposModal
    :modal="modal" class="apos-confirm"
    @esc="$emit('')" @no-modal="$emit('safe-close')"
    @inactive="modal.active = false" @show-modal="modal.showModal = true"
  >
    <template #main>
      <AposModalBody>
        <template #bodyMain>
          <img
            v-if="confirmContent.icon" class="apos-confirm__icon"
            :src="confirmContent.icon" alt=""
          >
          <h2 class="apos-confirm__heading" v-if="confirmContent.heading">
            {{ confirmContent.heading }}
          </h2>
          <p>
            {{ confirmContent.description }}
          </p>
          <div class="apos-confirm__btns">
            <AposButton
              class="apos-confirm__btn"
              :label="confirmContent.negativeLabel" @click="$emit('cancel')"
            />
            <AposButton
              class="apos-confirm__btn"
              :label="confirmContent.affirmativeLabel" @click="$emit('cancel')"
              type="primary"
            />
          </div>
          <!-- confirmContent: {
            icon: null,
            heading: 'Trash articles',
            description: 'Are you sure about this?',
            affirmativeLabel: 'Yes, trash them',
            negativeLabel: 'Cancel',
            theme: null
          } -->
        </template>
      </AposModalBody>
    </template>
  </AposModal>
</template>

<script>
import AposModalParentMixin from '../../mixins/AposModalParentMixin';
import AposModal from '../modal/AposModal.vue';
import AposModalBody from './../modal/AposModalBody.vue';
import AposButton from '../button/AposButton.vue';

export default {
  components: {
    AposModal,
    AposModalBody,
    AposButton
  },
  mixins: [AposModalParentMixin],
  props: {
    confirmContent: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      modal: {
        title: '',
        active: false,
        type: 'overlay',
        showModal: false
      },
      lastSelected: null
    };
  }
};
</script>

<style lang="scss" scoped>
.apos-confirm {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

/deep/ .apos-modal__inner {
  top: auto;
  left: auto;
  bottom: auto;
  right: auto;
  height: auto;
  width: 420px;
  text-align: center;
}
// .apos-confirm
// .apos-confirm__icon
// .apos-confirm__heading
// .apos-confirm__btns
// .apos-confirm__btn
</style>
