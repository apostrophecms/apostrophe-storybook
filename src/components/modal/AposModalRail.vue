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
  .apos-modal__rail {
    background-color: var(--a-base-9);
    // flex-grow: 1;
    // flex-shrink: 1;
  }

  .apos-modal__rail--left {
    // width: 22%;
  }

  .apos-modal__rail--right {
    // width: 18%;
  }

</style>
