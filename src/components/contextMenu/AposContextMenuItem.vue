<template>
  <li class="apos-context-menu__item">
    <button
      class="apos-context-menu__button"
      @click="click"
      :tabindex="tabindex"
    >
      {{ menuItem.label }}
    </button>
  </li>
</template>

<script>
export default {
  name: 'AposContextMenuItem',
  props: {
    menuItem: Object,
    open: Boolean
  },
  computed: {
    tabindex() {
      return this.open ? '0' : '-1';
    }
  },
  methods: {
    click() {
      this.$emit('clicked', this.menuItem.action);
    }
  }
}
</script>

<style lang="scss">
  .apos-context-menu__button {
    display: inline-block;
    width: 100%;
    padding: 10px 20px;
    border: none;
    text-align: left;
    font-size: map-get($font-sizes, default);
    letter-spacing: 0.5px;
    color: var(--a-base-1);
    background-color: var(--a-background-primary);
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
  }
</style>
