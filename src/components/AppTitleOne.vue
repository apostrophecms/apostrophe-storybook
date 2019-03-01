<template>
  <h1 :class="`apos-theme--${theme} apos-title-one`">{{ text }}</h1>
</template>

<script>
module.exports = {
  props: {
    text: String,
    theme: String
  }
}
</script>

<style lang="scss">
.apos-title-one {
  font-family: $font-family;
  font-weight: 700;
  &.apos-theme--light {
    color: $gray;
  }
  &.apos-theme--dark {
    color: #000;
  }
}
</style>
