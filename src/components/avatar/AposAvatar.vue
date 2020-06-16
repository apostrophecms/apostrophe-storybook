<template>
  <img :src="src" class="apos-avatar" :style="{ width: size }" :alt="alt">
</template>

<script>
export default {
  name: "AposAvatar",
  props: {
    src: {
      type: String,
      required: true
    },
    size: {
      type: [String],
      default: "30px"
    },
    alt: {
      type: String,
      default: "User Avatar Imge"
    }
  }
};
</script>

<style lang="scss">
.apos-avatar {
  display: inline-block;
  border-radius: 100%;
}
</style>
