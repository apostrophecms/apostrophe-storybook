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
  color: color('primary', 'shade-one');
  font-family: family('default');
  font-weight: weights('bold');
}
</style>
