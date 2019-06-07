<template>
  <fieldset class="apos-fieldset">
    <div v-for="input in items">
      <input class="apos-input apos-input--toggle" type="radio" :name="input.name" :id="input.id" :value="input.value" v-model="input.checked">
      <label :for="input.id">{{ input.label }}</label>
    </div>
  </fieldset>
</template>

<script>
module.exports = {
  props: {
    items: {
      name: String,
      id: String,
      value: String,
      label: String,
      checked: Boolean
    }
  }
}
</script>

<style lang="scss">
  .apos-input--toggle {
    // todo
  }
</style>
