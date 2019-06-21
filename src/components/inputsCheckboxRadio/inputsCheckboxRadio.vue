<template>
  <fieldset :class="fieldsetClasses">
    <legend class="apos-legend">{{ label }}</legend>
    <label v-for="option in options" :key="option.value" :for="option.label"
      :class="labelClasses">
      <input :type="inputType" :value="option.value" :name="name"
        :id="option.label" :class="inputClass"/>
      <span class="apos-input-indicator"></span>
      {{ option.label }}
    </label>
  </fieldset>
</template>

<script>
export default {
  name: 'AposInputsCheckboxRadio',
  props: {
    inputType: String,
    options: Array,
    label: String,
    name: String
  },
  computed: {
    inputClass: function () {
      return `apos-input--${this.inputType}`
    },
    fieldsetClasses: function () {
      return `apos-fieldset apos-fieldset--${this.inputType}`
    },
    labelClasses: function () {
      return `apos-input-label--${this.inputType}`;
    }
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
    font-size: map-get($font-sizes, input-label);
    font-weight: map-get($font-weights, medium);
    color: var(--neutral-one);
  }

  .apos-input-label--radio,
  .apos-input-label--checkbox {
    display: inline-flex;
    align-items: center;
    font-size: map-get($font-sizes, input-hint);
    font-weight: map-get($font-weights, medium);
    color: var(--neutral-two);

    & + &,
    .apos-legend + & {
      margin-top: $spacing-base;
    }
  }

  $box-width: 14px;

  .apos-input--checkbox,
  .apos-input--radio {
    position: absolute;
    display: inline;
    max-width: $box-width;
    margin: 0;
    padding: 0;
    visibility: hidden;
  }

  .apos-input-indicator {
    display: inline-block;
    width: $box-width;
    height: $box-width;
    // vertical-align: top;
    border: 1px solid var(--neutral-four);
    background-color: var(--neutral-seven);
    // .apos-transition(all, .1s, ease-in-out);
    // .apos-no-select;

    .apos-input--checkbox + & {
      border-radius: 3px;
    }

    .apos-input-label--checkbox &,
    .apos-input-label--radio & {
      margin-right: $spacing-base;
    }
  }
</style>
