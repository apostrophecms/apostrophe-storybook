<template>
  <div
    class="apos-tree--row-data" :class="headerClasses"
    :aria-hidden="spacerOnly"
  >
    <span
      v-for="(column, index) in columns"
      :key="`${index}-${column.name}`"
      class="apos-tree--cell"
      :class="`apos-tree--column-${column.name}`"
      :data-spacer="spacerOnly && column.name"
      :style="colWidths && colWidths[column.name] ? { width: `${colWidths[column.name]}px` } : {}"
    >
      {{ column.label }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'AposTreeHeader',
  props: {
    columns: {
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
        return 'apos-tree-header--hidden';
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
      this.columns.forEach(col => {
        colWidths[col.name] = this.$el.querySelector(`[data-spacer="${col.name}"]`).clientWidth;
      });
      this.$emit('calculated', colWidths);
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
.apos-tree--header {
  display: flex;
  width: 100%;
}

.apos-tree--row-data.apos-tree-header--hidden {
  display: block;
  height: 0;
  visibility: hidden;
}
</style>
