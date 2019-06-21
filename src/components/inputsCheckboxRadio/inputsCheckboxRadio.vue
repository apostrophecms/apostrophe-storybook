<template>
  <fieldset :class="fieldsetClasses">
    <legend class="apos-legend">{{ label }}</legend>
    <label v-for="option in options" :key="option.value" :for="option.label"
      :class="`${labelClasses}${option.disabled ? ' apos-input-label--disabled' : ''}`">
      <input :type="inputType" :value="option.value" :name="name"
        :id="option.label" :class="inputClass"
        :disabled="option.disabled" v-model="option.checked" :indeterminate.prop="option.indeterminate"/>
      <span class="apos-input-indicator" aria-hidden="true">
        <component :is="`${
          option.indeterminate ? 'MinusIcon' :
          option.checked ? 'CheckBoldIcon' : 'span'}`"
          :size="8" v-if="option.checked"></component>
      </span>
      {{ option.label }}
    </label>
  </fieldset>
</template>

<script>
import CheckBoldIcon from "vue-material-design-icons/CheckBold.vue";
import MinusIcon from "vue-material-design-icons/Minus.vue";

export default {
  name: 'AposInputsCheckboxRadio',
  props: {
    inputType: String,
    options: Array,
    label: String,
    name: String
  },
  components: {
    CheckBoldIcon,
    MinusIcon
  },
  computed: {
    inputClass: function () {
      return `apos-input--${this.inputType}`
    },
    fieldsetClasses: function () {
      return `apos-fieldset apos-fieldset--${this.inputType}`
    },
    labelClasses: function (option) {
      console.log(arguments);
      const type = `apos-input-label--${this.inputType}`;

      return `${type}`;
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

  .apos-input-label--disabled {
    color: var(--neutral-three);
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
    @include apos-transition(all, .1s, ease-in-out);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: $box-width;
    height: $box-width;
    border: 1px solid var(--neutral-four);
    background-color: var(--neutral-seven);

    .apos-input--checkbox + & {
      border-radius: 3px;
    }

    .apos-input-label--checkbox > &,
    .apos-input-label--radio > & {
      margin-right: $spacing-base;
    }

    .apos-input-label--checkbox:hover > &,
    .apos-input-label--radio:hover > &,
    .apos-input-label--checkbox:focus > &,
    .apos-input-label--radio:focus > & {
      border-color: var(--neutral-two);
    }

    .apos-input--checkbox[disabled] + &,
    .apos-input--radio[disabled] + & {
      border-color: var(--neutral-five);
      background-color: var(--neutral-five);
    }

    .apos-input--checkbox:checked + & {
      background-color: var(--primary);
      border-color: var(--primary);
      color: var(--neutral-seven);

      .material-design-icon { display: inline-flex; }
    }
  }
</style>
