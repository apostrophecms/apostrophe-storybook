<template>
  <div :class="`apos-tag ${modifier}`" :disabled="disabled">
    <Close class="apos-tag__close-icon" title="Remove Tag" :size="10" />
    {{ label }}
  </div>
</template>

<script>
import Close from 'vue-material-design-icons/Close.vue';
export default {
  props: {
    label: String,
    modifier: {
      default: '',
      type: String
    }
  },
  components: {
    Close
  }
}
</script>

<style lang="scss">
.apos-tag {
  display: inline-flex;
  padding: 6px 12px;
  border-radius: var(--a-border-radius);
  background-color: var(--a-base-1);
  font-size: map-get($font-sizes, default);
  letter-spacing: 0.5px;
  color: var(--a-base-8);
  align-items: center;
  justify-content: center;
}

.apos-tag__close-icon {
  display: flex;
  position: relative;
  top: 1px;
  margin-right: 5px;
  &:hover {
    cursor: pointer;
  }
}

.apos-tag-button {
  border: none;
  padding: 0;
  margin: 0;
  background-color: transparent;
  color: currentColor;
  &:hover {
    cursor: pointer;
  }
}

.apos-tag-list {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.apos-tag-list .apos-tag {
  margin-right: 1rem;
}
</style>
