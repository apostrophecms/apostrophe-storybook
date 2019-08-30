<template>
  <nav :class="['apos-breadcrumb', classObj]" aria-label="breadcrumb">
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
    variant: String
  },
  computed: {
    last() {
       return Object.keys(this.items).length - 1;
    },
    classObj: function () {
      return {
        'apos-breadcrumb--dark': this.variant === 'dark'
      };
    }
  },
  components: {
    ChevronRightIcon
  }
}
</script>

<style lang="scss">
  .apos-breadcrumb {
    border-bottom: 1px solid var(--border-color);

    &--dark {
      background-color: var(--background-dark);
      color: var(--text-light);
    }
  }
  .apos-breadcrumb__items {
    display: inline-block;
    margin: $spacing-base $spacing-double;
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

      .apos-breadcrumb--dark & {
        color: inherit;
      }
    }
  }
  .apos-breadcrumb__chevron {
    display: flex;
    margin: 0 4px;
    color: var(--neutral-two);
  }
</style>
