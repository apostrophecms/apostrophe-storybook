<template>
  <div :class="`apos-tag apos-tag--${modifier}`" :disabled="disabled">
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
  display: inline-block;
  font-family: map-get($font-families, secondary);
  padding: 6px 10px;
  background-color: var(--neutral-one);
  font-size: 1.2em;

  border-radius: var(--radius-small);
  color: var(--neutral-eight);
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
