<template>
  <label :for="label"
    :class="`apos-input-label--box apos-input-label--radio
      ${disabled ? ' apos-input-label--disabled' : ''}`">
    <input type="radio" class="apos-input--box apos-input--radio"
      :value="value" :name="name" :id="label"
      v-model="checked" :disabled="disabled"/>
    <span class="apos-input-indicator" aria-hidden="true">
      <component :is="`${
        indeterminate ? 'MinusIcon' :
        checked ? 'CheckBoldIcon' : 'span'}`"
        :size="8" v-if="checked"></component>
    </span>
    {{ label }}
  </label>
</template>

<script>
import CheckBoldIcon from "vue-material-design-icons/CheckBold.vue";
import MinusIcon from "vue-material-design-icons/Minus.vue";

export default {
  name: 'AposInputsRadio',
  props: {
    label: String,
    value: String,
    name: String,
    disabled: Boolean,
    checked: Boolean
  },
  components: {
    CheckBoldIcon,
    MinusIcon
  }
}
</script>

<style lang="scss">
  .apos-input-indicator {
    .apos-input--radio + & {
      border-radius: 50%;
    }
  }
</style>
