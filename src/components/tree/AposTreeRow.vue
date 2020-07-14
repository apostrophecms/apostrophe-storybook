<template>
  <li class="apos-tree--row">
    <div class="apos-tree--row-data">
      <span
        v-for="(cell, index) in cells"
        :key="`${index}-${cell.name}`"
        class="apos-tree--cell"
        :class="`apos-tree--column-${cell.name}`"
        :data-col="cell.name"
        :style="colWidths && colWidths[cell.name] ? { width: `${colWidths[cell.name]}px` } : {}"
      >
        {{ cell.value }}
      </span>
    </div>
    <ol class="apos-tree--list" v-if="row.children">
      <AposTreeRow
        v-for="(child, index) in row.children"
        :key="index"
        :row="child"
        :col-widths="colWidths"
        :columns="columns"
      />
    </ol>
  </li>
</template>

<script>
export default {
  name: 'AposTreeRow',
  props: {
    columns: {
      type: Array,
      required: true
    },
    row: {
      type: Object,
      required: true
    },
    colWidths: {
      type: Object,
      default () {
        return {};
      }
    }
  },
  computed: {
    isOpen() {
      return true;
    },
    cells() {
      const cellArray = [];
      this.columns.forEach(col => {
        cellArray.push({
          name: col,
          value: this.row[col]
        });
      });

      return cellArray;
    }
  }
};
</script>

<style lang="scss">
</style>
