<template>
  <div class="apos-media-manager-display">
    <div class="apos-media-manager-display__grid">
      <div class="apos-media-manager-display__cell" v-for="image in images" :key="image.id">
        <img :src="image.path" :alt="image.title">
      </div>
    </div>
  </div>
</template>

<script>
import AposButton from './../button/AposButton.vue';
import AposStringInput from './../inputString/AposStringInput.vue';

export default {
  components: { 
    // AposButton,
    // AposModalToolbar,
    // AposStringInput,
    // AposContextMenu,
    // AposTagApply
  },
  props: {
    images: {
      type: Array
    }
  },

  data() {
    return {
    }
  },
  computed: {

  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
  @import '../../scss/_mixins';
  .apos-media-manager-display__grid {
    display: grid;
  }
</style>
