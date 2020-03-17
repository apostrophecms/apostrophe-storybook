<template>
  <div class="apos-context-menu" :class="modifiers">
    <AposContextMenuTab />
    <ul class="apos-context-menu__items">
      <AposContextMenuItem 
        v-for="item in menu" 
        :key="item.action" 
        :menuItem="item" 
        v-on:clicked="itemClicked"
      />
    </ul>
  </div>
</template>

<script>
import AposLoading from '../loading/AposLoading.vue';
import AposContextMenuItem from './AposContextMenuItem.vue';
import AposContextMenuTab from './AposContextMenuTab.vue';

export default {
  name: 'AposContextMenu',
  components: {
    AposLoading,
    AposContextMenuItem,
    AposContextMenuTab
  },
  props: {
    menu: Array,
    alignment: {
      type: String,
      default: 'left'
    },
  },
  computed: {
    modifiers() {
      let modifiers = `apos-context-menu--aligned-${this.alignment}`;
      return modifiers;
    }
  },
  methods: {
    itemClicked(action) {
      console.log(`menu heard ${action} was clicked`);
      this.$emit('itemClicked', action);
    }
  }
}
</script>

<style lang="scss">
  .apos-context-menu {
    position: relative;
    display: inline-block;
    margin: 10px;
    &:before {
      content: '';
      width: 20px;
      height: 20px;
    }
  }

  .apos-context-menu--aligned-left {
    .apos-context-menu__tab {
      left: 20px;
    }
  }

  .apos-context-menu--aligned-center {
    .apos-context-menu__tab {
      right: 0;
      left: 0;
      margin-left: auto;
      margin-right: auto;
    }
  }
  .apos-context-menu--aligned-right {
    .apos-context-menu__tab {
      right: 20px;
    }
  }

  .apos-context-menu__tab {
    position: absolute;
    top: -8.5px;
  }

  .apos-context-menu__items {
    display: inline-block;
    list-style-type: none;
    margin: none;
    margin-block-start: 0;
    margin-block-end: 0;
    padding: 10px 0;
    border-radius: var(--a-border-radius);
    box-shadow: var(--a-box-shadow);
    background-color: var(--a-base-10);
    border: 1px solid var(--a-base-8);
  }
</style>
