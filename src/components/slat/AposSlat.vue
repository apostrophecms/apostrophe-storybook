
<template>
  <transition name="fade">
    <li class="apos-slat" :data-id="item.id">
      <div class="apos-slat__controls">
        <Drag class="apos-slat__control apos-slat__control--drag" :size="13"/>
        <Remove @click="remove" class="apos-slat__control apos-slat__control--remove" :size="13" />
      </div>
      <div class="apos-slat__label">
        {{ item.label }}
      </div>
    </li>
  </transition>
</template>

<script>
import Drag from 'vue-material-design-icons/Apps.vue';
import Remove from 'vue-material-design-icons/Close.vue';
export default {
  name: 'AposSlat',
  components: {
    Drag,
    Remove
  },
  methods: {
    remove() {
      this.$emit('remove', this.item);
    }
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss">
  .apos-slat {
    display: flex;
    align-items: center;
    border: 1px solid var(--a-base-5);
    border-radius: var(--a-border-radius);
    background-color: var(--a-base-9);
    padding: 10px;
    color: var(--a-text-primary);
    @include apos-transition();
    &:hover:not(.apos-slat-list__item--disabled) {
      background-color: var(--a-base-8);
      cursor: grab;
    }
    &:active:not(.apos-slat-list__item--disabled) {
      background-color: var(--a-base-7);
      cursor: grabbing;
    }
  }
  .apos-slat-list__item--disabled {
    opacity: 0.5;
    &:hover {
      cursor: not-allowed;
    }
  }

  .apos-slat__controls {
    display: flex;
    position: relative;
    top: 1px;
    margin-right: 2.5px;
  }

  .apos-slat__label {
    font-size: map-get($font-sizes, meta);
  }

  .apos-slat__control { 
    display: flex;
    align-content: center;
    margin-right: 5px;
  }

  .apos-slat__control--remove:hover {
    cursor: pointer;
  }
  .apos-slat__control--drag:hover {
    
  }
  .apos-slat__control--drag:active {
    
  }
</style>
