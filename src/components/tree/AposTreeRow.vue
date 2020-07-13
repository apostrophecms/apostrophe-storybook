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
      />
    </ol>
  </li>
</template>

<script>
export default {
  name: 'AposTreeRow',
  props: {
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
      const cells = [
        {
          name: 'title',
          value: 'One'
        },
        {
          name: 'updatedAt',
          value: 'Friday July 10th, 2020'
        },
        {
          name: 'published',
          value: true
        },
        {
          name: 'link',
          value: '/one'
        }
      ];
      return cells;
    }
  }
};
</script>

<style lang="scss">
.apos-tree--cell {
  .apos-tree--list .apos-tree--list &:first-child {
    padding-left: 24px;
  }
}
</style>
