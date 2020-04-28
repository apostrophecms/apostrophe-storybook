<template>
  <button class="apos-area-menu__button" :data-action="item.action">
    <component 
      v-if="item.icon"
      :size="15"
      class="apos-area-menu__item-icon"
      v-bind:is="icon"
    ></component>
    <span>{{ item.label }}</span>
  </button>
</template>

<script>

export default {
  props: {
    item: {
      required: true,
      type: Object
    }
  },

  computed: {
    icon() {
      if (this.item.icon) {
        return () => import(`vue-material-design-icons/${this.item.icon}.vue`);  
      }
    }
  },

  methods: {
    click(tag) {
      this.active = !this.active;
      this.$emit('click', tag.slug)
    }
  }
}
</script>

<style lang="scss">
@import '../../scss/_mixins';
.apos-tag-list__item {
  display: block;
  margin-bottom: 5px;
}
.apos-tag-list__button {
  @include apos-button-reset();
  display: flex;
  align-items: center;
  padding: 7.5px 10px;
  border-radius: 5px;
  background: transparent;
  @include apos-transition(all, .1s, ease-in-out);
  &.is-active {
    background-color: var(--a-primary);
    color: var(--a-white);
  }
  &:hover,
  &:focus {
    background-color: var(--a-base-8);
    .apos-tag-list__icon--tag {
      color: var(--a-base-2);
    }
  }
  &:hover.is-active,
  &:focus.is-active {
    background-color: var(--a-primary-button-hover);
    color: var(--a-white);
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 5px var(--a-base-6);
  }
  &:focus.is-active {
    box-shadow: 0 0 5px var(--a-primary-button-active);
  }
}

.apos-tag-list__icon--remove {
  position: relative;
  top: 1px;
}

.apos-tag-list__icon--tag {
  color: var(--a-base-6);
}

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(2px);
  opacity: 0;
}

.apos-tag-list__icon {
  display: inline-flex;
  margin-right: 5px;
}

.apos-tag-list__label {
  font-size: map-get($font-sizes, default);
}

</style>
