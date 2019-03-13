<template>
  <h1 class="apos-title-one">{{ text }}</h1>
</template>

<script>
module.exports = {
  props: {
    text: String
  }
}
</script>

<style lang="scss">
.apos-title-one {
  font-family: family('default');
  font-weight: weight('bold');
  @include variable(color, --text-color, color('primary', 'shade-two'));
}
</style>
