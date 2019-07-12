<template>
  <fieldset class="apos-fieldset">
    <legend class="apos-legend">{{ label }}</legend>
    <slot name="inputs"></slot>
  </fieldset>
</template>

<script>
export default {
  name: 'AposInputsGroup',
  props: {
    inputType: String,
    label: String,
    name: String
  }
}
</script>

<style lang="scss">
  .apos-fieldset,
  .apos-legend {
    margin: 0;
    padding: 0;
  }

  .apos-fieldset {
    display: flex;
    flex-direction: column;
    border-width: 0;
  }

  .apos-legend {
    font-size: map-get($font-sizes, input);
    font-weight: map-get($font-weights, medium);
    color: var(--neutral-one);
  }
</style>
