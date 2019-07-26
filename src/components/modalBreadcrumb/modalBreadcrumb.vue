<template>
  <nav class="apos-breadcrumb" aria-label="breadcrumb">
    <ol class="apos-breadcrumb__items">
      <li v-for="(item, index) in items" :key="index" :class="`apos-breadcrumb__item ${modifier}`">
        <component :is="item.href ? 'a' : 'span'" :href="item.href">{{ item.label }}</component>
        <ChevronRightIcon class="apos-breadcrumb__chevron" :size="13" v-if="index !== last" />
      </li>
    </ol>
  </nav>
</template>

<script>
import ChevronRightIcon from 'vue-material-design-icons/ChevronRight.vue';
export default {
  props: {
    label: {
      default: 'Set a label',
      type: String
    },
    modifier: {
      default: '',
      type: String
    },
    items: {
      default: [],
      type: Array
    },
  },
  computed: {
    last() {
       return Object.keys(this.items).length - 1;
    }
  },
  components: {
    ChevronRightIcon
  }
}
</script>

<style lang="scss">
  .apos-breadcrumb__items {
    margin: 18px 20px;
    padding-left: 0;
  }
  .apos-breadcrumb__item {
    display: inline-flex;
    align-items: center;
    font-family: map-get($font-families, default);
    letter-spacing: 0.75px;
    font-size: map-get($font-sizes, meta);

    a {
      @include link-primary;
      text-decoration: none;
    }
  }
  .apos-breadcrumb__chevron {
    display: flex;
    margin: 0 4px;
    color: var(--neutral-two);
  }
</style>
