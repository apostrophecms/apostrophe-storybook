<template>
  <div :class="`apos-tag ${modifier}`" :disabled="disabled">
    <slot name="icon"></slot>
    {{ label }}
  </div>
</template>

<script>
module.exports = {
  props: {
    label: String,
    modifier: {
      default: '',
      type: String
    },
    disabled: Boolean
  }
}
</script>

<style lang="scss">
.apos-tag {
  display: inline-flex;
  padding: 6px 10px;
  background-color: var(--a-base-1);
  font-size: map-get($font-sizes, default);
  letter-spacing: 0.5px;
  border-radius: var(--a-border-radius);
  color: var(--a-base-8);
  align-items: center;
  justify-content: center;

  .material-design-icon {
    display: flex;
    margin-right: 5px;
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
