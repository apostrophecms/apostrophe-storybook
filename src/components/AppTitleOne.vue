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
  color: $gray;
  font-family: $font-family;
  font-weight: 700;
}
</style>
