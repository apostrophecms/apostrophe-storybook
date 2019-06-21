<template>
  <label :for="label"
    :class="`apos-input-label--box apos-input-label--checkbox
      ${disabled ? ' apos-input-label--disabled' : ''}`">

    <input type="checkbox" class="apos-input--box apos-input--checkbox"
      :value="value" :name="name" :id="label"
      v-model="checked"
      :disabled="disabled" :indeterminate.prop="indeterminate"/>

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
  name: 'AposInputsCheckbox',
  props: {
    label: String,
    value: String,
    name: String,
    disabled: Boolean,
    indeterminate: Boolean,
    checked: Boolean
  },
  // data () {
  //   return {
  //     checked: false
  //   }
  // },
  components: {
    CheckBoldIcon,
    MinusIcon
  }
}
</script>

<style lang="scss">
  @import '../../scss/_inputs';

  .apos-input-indicator {
    .apos-input--checkbox + & {
      border-radius: 3px;
    }
  }
</style>
