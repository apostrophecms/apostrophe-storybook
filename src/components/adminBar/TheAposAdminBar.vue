<template>
  <nav class="apos-admin-bar">
    <div class="apos-admin-bar__logo">
      <AposLogo />
    </div>
    <div
      v-for="(item, index) in menuItems" :key="item.name"
      class="apos-admin-bar__item"
    >
      <component
        v-if="item.options" :is="item.options.href ? 'a' : 'button'"
        class="apos-admin-bar__btn" :href="item.options.href"
        v-on="item.options.href ? {} : { click: () => emitEvent(item.name) }"
      >
        {{ item.label }}
      </component>
      <AposContextMenu
        v-else-if="item.items" class="apos-admin-bar__sub"
        :menu="item.items" :button="{
          label: item.label
        }"
        :tip-alignment="index > 1 ? 'right' : 'left'"
      />
      <!-- <ul
        v-if="item.items" v-show="item.open"
        class="apos-admin-bar__dropdown-items"
      >
        <li
          v-for="subItem in item.items" :key="subItem.name"
          class="apos-admin-bar__dropdown-item"
        >
          <component
            v-if="subItem.options" :is="subItem.options.href ? 'a' : 'button'"
            class="apos-admin-bar__btn" :href="subItem.options.href"
            v-on="subItem.options.href ? {} : { click: () => emitEvent(subItem.name) }"
          >
            {{ subItem.label }}
          </component>
        </li>
      </ul> -->
    </div>
  </nav>
</template>

<script>
import AposLogo from './AposLogo';
import AposContextMenu from '../contextMenu/AposContextMenu';

export default {
  name: 'TheAposAdminBar',
  components: {
    AposLogo,
    AposContextMenu
  },
  props: {
    items: {
      type: Array,
      default: function () {
        return [];
      }
    }
  },
  data() {
    return {
      menuItems: []
    };
  },
  mounted() {
    this.menuItems = [...this.items];
  },
  methods: {
    emitEvent: function (name) {
      console.log(name);
      // apos.bus.$emit('adminBarItem', name);
    },
    openItem(index, isOpen) {
      console.log('📖', index, isOpen);
      this.menuItems[index].open = isOpen;
      console.info(this.menuItems[index].open, this.menuItems[index].items);
    }
  }
};
</script>

<style lang="scss" scoped>
$menu-height: 63px;
$menu-h-space: 16px;
$menu-v-space: 25px;

body {
  margin-top: $menu-height;
}

.apos-admin-bar {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  width: 100%;
  height: $menu-height;
  padding: 0 16px;
  border-bottom: 1px solid var(--a-base-9);
  background: var(--a-background-primary);
  font-size: map-get($font-sizes, menu-label);
}

.apos-admin-bar__logo,
.apos-admin-bar__item {
  display: inline-block;
}

.apos-admin-bar__logo {
  margin-right: $menu-h-space;
}

.apos-admin-bar__sub /deep/ .apos-button,
.apos-admin-bar__btn {
  @include apos-button-reset();
  position: relative;
  display: inline-flex;
  align-items: center;
  height: $menu-height;
  margin: 0;
  padding: 0 $menu-v-space;
  border: 0;
  color: var(--a-text-primary);
  text-decoration: none;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: var(--a-base-8);
  }
}

.apos-admin-bar__dropdown-items .apos-admin-bar__btn {
  padding: 25px;
}

.apos-admin-bar__dropdown-items {
  list-style: none;
  margin: 0;
  padding: 0;
  background: var(--a-base-10);
}
</style>
