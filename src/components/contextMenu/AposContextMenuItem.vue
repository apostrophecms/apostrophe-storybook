<template>
  <li class="apos-context-menu__item">
    <button 
      class="apos-context-menu__button"
      @click="clicked"
    >
      {{ menuItem.label }}
    </button>
  </li>
</template>


<script>
export default {
  name: 'AposContextMenuItem',
  props: {
    menuItem: Object
  },
  computed: {
  },
  methods: {
    clicked() {
      console.log('item clicked');
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
    color: var(--a-base-5);
    background-color: var(--a-base-10);
    &:hover {
      cursor: pointer;
      color: var(--a-base-1);
    }
  }
</style>
