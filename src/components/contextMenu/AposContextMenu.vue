<template>
  <div class="apos-context-menu" :class="modifiers">
    <AposContextMenuTip />
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
import AposContextMenuTip from './AposContextMenuTip.vue';

export default {
  name: 'AposContextMenu',
  components: {
    AposLoading,
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
    },
  },
  computed: {
    modifiers() {
      let modifiers = 
        `apos-context-menu--tip-alignment-${this.tipAlignment} 
        apos-context-menu--origin-${this.origin}`;
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

  .apos-context-menu--tip-alignment-left {
    .apos-context-menu__tab {
      left: 20px;
    }
  }

  .apos-context-menu--tip-alignment-center {
    .apos-context-menu__tab {
      right: 0;
      left: 0;
      margin-left: auto;
      margin-right: auto;
    }
  }
  .apos-context-menu--tip-alignment-right {
    .apos-context-menu__tab {
      right: 20px;
    }
  }

  .apos-context-menu--origin-below {
    .apos-context-menu__tab {
      top: -8.5px;
    }
  }

  .apos-context-menu--origin-above {
    .apos-context-menu__tab {
      bottom: -9.5px;
      transform: rotate(180deg);
    }
  }

  .apos-context-menu__tab {
    position: absolute;
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
    background-color: var(--a-background-primary);
    border: 1px solid var(--a-base-8);
  }
</style>
