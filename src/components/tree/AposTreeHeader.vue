<template>
  <div
    class="apos-tree__row-data apos-tree__header" :class="headerClasses"
    :aria-hidden="spacerOnly"
  >
    <span
      v-for="(col, index) in headers"
      :key="`${index}-${col.name}`"
      class="apos-tree__cell"
      :class="`apos-tree--column-${col.name}`"
      :data-spacer="spacerOnly && col.name"
      :style="getCellStyles(col)"
    >
      <component
        v-if="col.labelIcon" :is="col.labelIcon"
        class="apos-tree__cell__icon"
      />
      {{ col.label }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'AposTreeHeader',
  props: {
    headers: {
      type: Array,
      required: true
    },
    spacerOnly: {
      type: Boolean,
      default: false
    },
    colWidths: {
      type: Object,
      default () {
        return {};
      }
    }
  },
  computed: {
    headerClasses() {
      if (this.spacerOnly) {
        return 'apos-tree__header--hidden';
      }
      return '';
    }
  },
  mounted() {
    if (this.spacerOnly) {
      this.calculateWidths();

      window.addEventListener('resize', debounce(this.calculateWidths, 100));
    }
  },
  destroyed() {
    if (this.spacerOnly) {
      window.addEventListener('resize', debounce(this.calculateWidths, 100));
    }
  },
  methods: {
    calculateWidths() {
      const colWidths = {};

      this.headers.forEach(col => {
        const ref = this.$el.querySelector(`[data-spacer="${col.name}"]`);

        if (!ref) {
          return;
        }

        colWidths[col.name] = ref.clientWidth;
      });
      this.$emit('calculated', colWidths);
    },
    getCellStyles (cell) {
      const styles = {};
      if (this.colWidths && this.colWidths[cell.name]) {
        styles.width = `${this.colWidths[cell.name]}px`;
      }
      return styles;
    }
  }
};

// Debounce function from https://davidwalsh.name/javascript-debounce-function
function debounce(func, wait, immediate) {
  let timeout;

  return function() {
    const context = this;
    const args = arguments;
    const later = function() {
      timeout = null;
      if (!immediate) {
        func.apply(context, args);
      }
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) {
      func.apply(context, args);
    }
  };
};
</script>

<style lang="scss">
.apos-tree__header {
  color: var(--a-base-3);
}

.apos-tree__header.apos-tree__header--hidden {
  display: block;
  height: 0;
  visibility: hidden;
}
</style>
