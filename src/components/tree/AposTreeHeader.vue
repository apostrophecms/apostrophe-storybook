<template>
  <div class="apos-tree--row-data">
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
  mounted() {
    if (this.spacerOnly) {
      const colWidths = {};
      this.columns.forEach(col => {
        colWidths[col.name] = this.$el.querySelector(`[data-spacer="${col.name}"]`).clientWidth;
      });
      this.$emit('calced', colWidths);
    }
  }
};
</script>

<style lang="scss">
.apos-tree--header {
  display: flex;
  width: 100%;
}
</style>
