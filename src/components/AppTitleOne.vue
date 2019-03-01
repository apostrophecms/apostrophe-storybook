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
  font-family: family('default');
  font-weight: weights('bold');
  &.apos-theme--light {
    color: color('primary', 'shade-two');
  }
  &.apos-theme--dark {
    color: color('primary', 'shade-one');
  }
}
</style>
