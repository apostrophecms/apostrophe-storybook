<template>
  <nav class="apos-pager">
    <AposButton
      :disabled="currentPage == 1"
      class="apos-pager__btn"
      type="outline" @click="incrementPage(-1)"
      icon-only="true" icon="chevron-left-icon"
      label="Previous page of results"
    />
    Page {{ currentPage }}
    <AposButton
      :disabled="currentPage >= totalPages"
      class="apos-pager__btn"
      type="outline" @click="incrementPage(1)"
      icon-only="true" icon="chevron-right-icon"
      label="Next page of results"
    />
  </nav>
</template>

<script>
import AposButton from '../button/AposButton';

export default {
  name: 'AposPager',
  components: {
    AposButton
  },
  props: {
    currentPage: {
      type: Number,
      default: 1
    },
    totalPages: {
      type: Number,
      required: true
    }
  },
  methods: {
    incrementPage(num) {
      let newPage = this.currentPage + num;
      if (newPage > this.totalPages) {
        newPage = this.totalPages;
      } else if (newPage < 1) {
        newPage = 1;
      }
      this.$emit('click', newPage);
    }
  }
};
</script>

<style lang="scss">
  .apos-pager {
    display: inline-flex;
    align-items: center;
    font-size: map-get($font-sizes, default);
  }

  .apos-pager__btn {
    &:first-child {
      margin-right: $spacing-base;
    }

    &:last-child {
      margin-left: $spacing-base;
    }
  }
</style>
