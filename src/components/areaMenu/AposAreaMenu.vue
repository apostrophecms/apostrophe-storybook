<template>

  <div class="apos-area-menu">
    <AposContextMenu tipAlignment="center">
      <div v-for="(group, index) in groups" v-bind:key="group.label" class="apos-area-menu__group">
        <label :for="group.label" class="apos-area-menu__group-label">
          <span>{{ group.label }}</span>
          <Chevron class="apos-area-menu__group-chevron" :class="{'is-active': index === active}" :size="13" />
        </label>
        <input type="checkbox" class="apos-area-menu__accordion-trigger" 
          :id="group.label" name="menuGroup"
          :checked="index === active"
          @change="update($event, group.label + index, index)"
          :ref="group.label + index"
          :data-index="index"
        >
        <ul class="apos-area-menu__items apos-area-menu__items--accordion">
          <li class="apos-area-menu__item" v-for="item in group.items" v-bind:key="item.action">
            <button class="apos-area-menu__button" :data-action="item.action">{{ item.label }}</button>
          </li>
        </ul>
      </div>
      <ul v-if="items" class="apos-area-menu__items">
        <li class="apos-area-menu__item" v-for="item in items" v-bind:key="item.action">
          <button class="apos-area-menu__button" :data-action="item.action">{{ item.label }}</button>
        </li>
      </ul>
    </AposContextMenu>
  </div>
</template>

<script>
import AposContextMenu from '../contextMenu/AposContextMenu.vue';
import Chevron from 'vue-material-design-icons/ChevronUp.vue';
export default {
  props: {
    items: {
      type: Array
    },
    groups: {
      type: Array
    }
  },
  components: { 
    AposContextMenu,
    Chevron
  },
  data() {
    return {
      active: 0 // the index of the open accordion
    }
  },
  computed: {

  },
  methods: {
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

.apos-area-menu__items {
  @include apos-list-reset();
  min-width: 250px;
}

.apos-area-menu__button {
  @include apos-button-reset();
  display: block;
  width: 100%;
  color: var(--a-base-1);
  &:hover {
    cursor: pointer;
    color: var(--a-text-primary);
  }
  &:focus {
    outline: none;
    color: var(--a-text-primary);
  }
  &:active {
    color: var(--a-base-1);
  }
  // &:hover {
  //   cursor: pointer;
  //   background-color: var(--a-base-10);
  // }
  // &:active,
  // &:focus {
  //   background-color: var(--a-base-9);
  // }
}

.apos-area-menu__accordion-trigger {
  z-index: -1;
  opacity: 0;
  position: absolute;
}

.apos-area-menu__button,
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

.apos-area-menu__items--accordion {
  border-bottom: 1px solid var(--a-base-8);
  padding-bottom: 10px;
  margin-bottom: 10px;
}

.apos-area-menu__group:last-child .apos-area-menu__items--accordion {
  border-bottom: none;
  margin-bottom: 0;
  padding-bottom: 0;
}

.apos-area-menu__items--accordion {
  overflow: hidden;
  max-height: 0px;
  @include apos-transition($duration:0.3s);
}

.apos-area-menu__accordion-trigger:checked + .apos-area-menu__items--accordion {
  transition-delay: 0.25s;
  max-height: 20rem;
}

</style>
