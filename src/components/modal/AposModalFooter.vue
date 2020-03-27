<template>
  <div class="apos-modal__footer">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'AposModalFooter',
  props: {
  },
  computed: {
    // hasHeader() {
    //   return !!this.$slots.bodyHeader;
    // }
  }
}
</script>

<style lang="scss" scoped>
  .apos-modal__footer {
    grid-row: 3 / 4;
  }
</style>
