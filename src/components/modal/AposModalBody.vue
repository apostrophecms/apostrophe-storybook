<template>
  <div class="apos-modal__body">
    <div class="apos-modal__body-inner">
      <div v-if="hasHeader" class="apos-modal__body-header">
        <slot name="bodyHeader"></slot>
      </div>
      <div class="apos-modal__body-main">
        <slot name="bodyMain"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AposModalBody',
  props: {
  },
  computed: {
    hasHeader() {
      return (this.$slots.bodyHeader ? true : false);
    }
  }
}
</script>

<style lang="scss" scoped>
  .apos-modal__body {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 100%;
  }

  .apos-modal__body-inner {
    padding: 20px 60px;
  }

  .apos-modal__body-header {
    margin-bottom: 20px;
  }
</style>
