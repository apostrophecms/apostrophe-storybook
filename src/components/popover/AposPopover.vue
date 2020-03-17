<template>
  <div class="apos-popover">
    <ul class="apos-popover__items">
      <li 
        v-for="item in menu" :key="item.action"
        class="apos-popover__item"
      >
        <button 
        class="apos-popover__button"
        @click="interacted(item.action)"
        :class="{ 'is-busy': item.busy }"
        >
          {{ item.label }}
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import AposLoading from '../loading/AposLoading.vue';

export default {
  name: 'AposPopover',
  components: {
    AposLoading
  },
  props: {
    menu: Array,
    alignment: {
      type: String,
      default: 'left'
    },
  },
  computed: {
    modifierClass() {
      let modifiers = false;
      return modifiers;
    }
  },
  methods: {
    interacted(action) {
      this.$emit('interacted', action);
    }
  }
}
</script>

<style lang="scss">
  .apos-popover {
    border-radius: var(--border-radius);
  }
  .apos-popover__button.is-busy {
    color: green;
  }
</style>
