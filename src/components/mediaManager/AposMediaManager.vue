<template>
  <div class="apos-media-manager">
    main
  </div>
</template>

<script>
import AposContextMenu from '../contextMenu/AposContextMenu.vue';
import AposAreaMenuItem from './AposAreaMenuItem.vue';
import Chevron from 'vue-material-design-icons/ChevronUp.vue';
export default {
  props: {
    menu: {
      type: Array,
      required: true
    }
  },
  components: { 
    AposContextMenu,
    AposAreaMenuItem,
    Chevron
  },
  data() {
    return {
      active: 0,
      groupIsFocused: false
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

</style>
