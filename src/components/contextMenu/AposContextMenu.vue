<template>
  <div class="apos-context-menu">
    <AposContextMenuTip 
      :align="tipAlignment"
      :origin="origin"
    />
    <div class="apos-context-menu__inner">
      <slot>
        <ul class="apos-context-menu__items">
          <AposContextMenuItem 
            v-for="item in menu" 
            :key="item.action" 
            :menuItem="item" 
            v-on:clicked="itemClicked"
          />
        </ul>
      </slot>
    </div>
  </div>
</template>

<script>
import AposContextMenuItem from './AposContextMenuItem.vue';
import AposContextMenuTip from './AposContextMenuTip.vue';

export default {
  name: 'AposContextMenu',
  components: {
    AposContextMenuItem,
    AposContextMenuTip
  },
  props: {
    menu: Array,
    tipAlignment: {
      type: String,
      default: 'left'
    },
    origin: {
      type: String,
      default: 'below'
    }
  },
  methods: {
    itemClicked(action) {
      this.$emit('itemClicked', action);
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/_mixins';

  .apos-context-menu {
    position: relative;
    display: inline-block;
    margin: 10px;
    color: var(--a-text-primary);
  }

  .apos-context-menu__inner {
    border-radius: var(--a-border-radius);
    box-shadow: var(--a-box-shadow);
    background-color: var(--a-background-primary);
    border: 1px solid var(--a-base-8);
  }

  .apos-context-menu__items {
    @include apos-list-reset();
    display: inline-block;
    list-style-type: none;
    margin: none;
    margin-block-start: 0;
    margin-block-end: 0;
    padding: 10px 0;
  }
</style>
