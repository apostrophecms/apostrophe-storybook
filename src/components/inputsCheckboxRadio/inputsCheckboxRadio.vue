<template>
  <fieldset>
    <legend>{{ label }}</legend>
    <label v-for="option in options" :key="option.value" :for="option.label">
      <input :type="inputType" :value="option.value" :name="name" :id="option.label"/>
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
  }
}
</script>

<style lang="scss">
</style>
