<template>
  <nav class="apos-pager">
    <AposButton
      :disabled="currentPage == 1"
      class="apos-pager__btn"
      type="outline" @click="incrementPage(-1)"
      :icon-only="true" icon="chevron-left-icon"
      :label="prevButtonLabel"
    />
    Page
    <div class="apos-input-wrapper">
      <select
        class="apos-input apos-input--select"
        v-model="selectedPage" aria-label="Select page"
      >
        <option
          v-for="num in totalPages" :key="num"
          :value="num"
        >
          {{ num }}
        </option>
      </select>
      <MenuSwap :size="24" class="apos-input-icon" />
    </div>
    <AposButton
      :disabled="currentPage >= totalPages"
      class="apos-pager__btn"
      type="outline" @click="incrementPage(1)"
      :icon-only="true" icon="chevron-right-icon"
      :label="nextButtonLabel"
    />
  </nav>
</template>

<script>
import AposButton from '../button/AposButton';
import MenuSwap from "vue-material-design-icons/MenuSwap.vue";

export default {
  name: 'AposPager',
  components: {
    AposButton,
    MenuSwap
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
  computed: {
    prevButtonLabel () {
      return this.currentPage > 1 ? `Go to page ${this.currentPage - 1}`
        : 'Previous page';
    },
    nextButtonLabel () {
      return this.currentPage < this.totalPages
        ? `Go to page ${this.currentPage + 1}` : 'Next page';
    },
    selectedPage: {
      get() {
        return this.currentPage;
      },
      set(val) {
        this.$emit('change', val);
      }
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

<style lang="scss" scoped>
  .apos-pager {
    display: inline-flex;
    align-items: center;
    font-size: map-get($font-sizes, default);
  }

  .apos-input-wrapper {
    display: inline-flex;
    align-self: stretch;
    margin-left: 0.5em;
  }

  .apos-input--select {
    background-color: transparent;
    padding: 0 $spacing-double 0 $spacing-base;
  }

  .apos-input-icon {
    right: $spacing-base / 4;
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
