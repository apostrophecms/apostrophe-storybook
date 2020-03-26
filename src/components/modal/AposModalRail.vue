<template>
  <div class="apos-modal__rail" :class="`apos-modal__rail--${type}`">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'AposModalRail',
  props: {
    type: {
      type: String,
      default: 'left'
    }
  },
  computed: {

  }
}
</script>

<style lang="scss" scoped>
  .apos-modal__rail--left {
    width: 22%;
  }

  .apos-modal__rail--right {
    width: 18%;
  }

</style>
