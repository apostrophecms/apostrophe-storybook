<template>
  <div class="apos-modal__footer">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'AposModalFooter'
};
</script>

<style lang="scss" scoped>
  .apos-modal__footer {
    grid-row: 3 / 4;
  }
</style>
