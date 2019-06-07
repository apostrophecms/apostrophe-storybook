<template>
  <div :class="`apos-tag apos-tag--${modifier}`" :disabled="disabled">
    <slot name="icon"></slot>
    {{ label }}
  </div>
</template>

<script>
module.exports = {
  props: {
    label: String,
    modifier: String,
    disabled: Boolean
  }
}
</script>

<style lang="scss">
.apos-tag {
  display: inline-flex;
  font-family: map-get($font-families, secondary);
  padding: 6px 10px;
  background-color: var(--neutral-one);
  font-size: 1.2em;
  border-radius: var(--radius-small);
  color: var(--neutral-eight);
  align-items: center;
  justify-content: center;

  .material-design-icon {
    display: flex;
    margin-right: 5px;
    &:hover {
      cursor: pointer;
    }
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

  --tag-font-size: 1.2em;
  --tag-font-weight: 600;
  --tag-color: var(--neutral-eight);
  --tag-background-color: var(--neutral-one);


  // --tag-text-size: 1.2rem;
  // --tag-text-weight: 600;
  // --tag-text-color: --neutral-eight;
  // --tag-background-color: --neutral-one;
