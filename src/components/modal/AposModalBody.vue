<template>
  <div class="apos-modal__body">
    <div class="apos-modal__body-header">
      <slot name="bodyHeader"></slot>
    </div>
    <div class="apos-modal__body-main">
      <slot name="bodyMain"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AposModalBody',
  props: {
  },
  computed: {

  }
}
</script>

<style lang="scss" scoped>
  .apos-modal__body {
    flex-grow: 1;
  }
</style>
