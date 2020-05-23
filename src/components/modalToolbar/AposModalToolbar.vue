<template>
  <div :class="className" class="apos-toolbar">
    <div v-if="hasLeftControls" class="apos-toolbar__group apos-toolbar__group--left">
      <slot name="leftControls"></slot>
    </div>
    <div v-if="hasRightControls" class="apos-toolbar__group apos-toolbar__group--right">
      <slot name="rightControls"></slot>
    </div>
  </div>
</template>

<script>

export default {
  components: { 
  },
  props: {
    className: String
  },
  computed: {
    hasLeftControls() {
      return !!this.$slots.leftControls;
    },
    hasRightControls() {
      return !!this.$slots.rightControls;
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
  @import '../../scss/_mixins';
  .apos-toolbar {
    display: flex;
    justify-content: space-between;
  }

  .apos-toolbar__group--left > * {
    margin-right: 5px;
  }

  .apos-toolbar__group--right > * {
    margin-left: 5px;
  }

  .apos-toolbar__group {
    display: flex;
  }
</style>
