<template>
  <div class="apos-area-menu">
    <AposContextMenu tipAlignment="center">
      <ul class="apos-area-menu__wrapper">
        <li class="apos-area-menu__item"
          v-for="(item, index) in myMenu" v-bind:key="item.label"
          :class="{'has-group': item.items}"
          >
          <dl v-if="item.items" class="apos-area-menu__group">
            <dt>
              <label :for="item.label" class="apos-area-menu__group-label" v-if="item.items">
                <span>{{ item.label }}</span>
                <Chevron class="apos-area-menu__group-chevron" :class="{'is-active': index === active}" :size="13" />
              </label>
              <input type="checkbox" class="apos-area-menu__accordion-trigger" 
                v-if="item.items"
                :id="item.label" name="menuGroup"
                :checked="index === active"
                @change="update($event, item.label + index, index)"
                :ref="item.label + index"
                :data-index="index"
              >
            </dt>
            <dd class="apos-area-menu__group-list">
              <ul class="apos-area-menu__items apos-area-menu__items--accordion"
                :class="{'is-active': active === index}"
              >
              <li class="apos-area-menu__item"  v-for="child in item.items" v-bind:key="child.action" >
                <AposAreaMenuItem :item="child" />
              </li>
              </ul>
            </dd>
          </dl>
          <AposAreaMenuItem v-else :item="item" />
        </li>
      </ul>
    </AposContextMenu>
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
      active: 0
    }
  },
  computed: {
    groupedMenus() {
      let flag = false;
      this.menu.forEach((e) => {
        if (e.items) {
          flag = true;
        }
      });
      return flag;
    },
    myMenu() {
      if (this.groupedMenus) {
        return this.composeGroups();
      } else {
        return this.menu;
      }
    }
  },
  methods: {
    composeGroups() {
      const ungrouped = {
        label: 'Ungrouped Widgets',
        items: []
      };
      const myMenu = [];

      this.menu.forEach((item) => {
        if (!item.items) {
          ungrouped.items.push(item);
        } else {
          myMenu.push(item);
        }
      });

      if (ungrouped.items.length) {
        myMenu.push(ungrouped);
      }
      return myMenu;
    },

    update(event, refName, index) {
      if (!event.target.checked) {
        return this.active = null;
      }
      for (const checkbox in this.$refs) {
        if (checkbox !== refName) {
          this.$refs[checkbox].checked = false;
        }
      }
      this.active = index;
    }
  }
}
</script>

<style lang="scss">
@import '../../scss/_mixins';

.apos-area-menu {
  font-size: map-get($font-sizes, default);
}

.apos-area-menu__wrapper,
.apos-area-menu__items,
.apos-area-menu__group-list {
  @include apos-list-reset();
}

.apos-area-menu__wrapper {
  min-width: 250px;
}

.apos-area-menu__item-icon {
  @include apos-align-icon();
  margin-right: 10px;
}

.apos-area-menu__button {
  @include apos-button-reset();
  display: flex;
  padding: 5px 20px;
  align-items: center;
  width: 100%;
  color: var(--a-base-1);
  &:hover {
    cursor: pointer;
    color: var(--a-text-primary);
    .apos-area-menu__item-icon {
      color: var(--a-primary);
    }
  }
  &:focus {
    outline: none;
    color: var(--a-text-primary);
  }
  &:active {
    color: var(--a-base-1);
  }
}

.apos-area-menu__accordion-trigger {
  z-index: -1;
  opacity: 0;
  position: absolute;
}

.apos-area-menu__group-label {
  padding: 10px 20px;
}

.apos-area-menu__group-label {
  display: flex;
  justify-content: space-between;
  &:hover {
    cursor: pointer;
  }
}

.apos-area-menu__group-chevron {
  @include apos-transition();
  transform: rotate(90deg);
}

.apos-area-menu__group-chevron.is-active {
  transform: rotate(180deg);
}

.apos-area-menu__group {
  border-bottom: 1px solid var(--a-base-8);
  padding-bottom: 10px;
  margin-bottom: 10px;
}
.apos-area-menu__item:last-child.has-group .apos-area-menu__group {
  border-bottom: none;
  margin-bottom: 0;
}

.apos-area-menu__items--accordion {
  overflow: hidden;
  max-height: 0px;
  @include apos-transition($duration:0.3s);
}

.apos-area-menu__items--accordion.is-active {
  transition-delay: 0.25s;
  max-height: 20rem;
}

</style>
