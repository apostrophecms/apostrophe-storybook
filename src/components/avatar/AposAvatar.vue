
<template>
  <div>
    {{ theme }}
    <img :src="src" class="apos-avatar" :style="{ width: size }" :alt=alt>
  </div>
</template>

<script>
export default {
  name: 'AposAvatar',
  props: {
    src: {
      type: String,
      required: true
    },
    size: {
      type: [String],
    },
    alt: String
  }
};
</script>

<style lang="scss">
  .apos-avatar {
    display: inline-block;
    border-radius: 100%;
    width: 30px;
  }
</style>
