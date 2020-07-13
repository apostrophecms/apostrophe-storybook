<template>
  <li class="apos-tree--row">
    <div class="apos-tree--row-data">
      <span
        v-for="(cell, index) in cells"
        :key="`${index}-${cell.name}`"
        class="apos-tree--cell"
        :class="`apos-tree--column-${cell.name}`"
      >
        {{ cell.value }}
      </span>
    </div>
    <ol class="apos-tree--list" v-if="row.children">
      <AposTreeRow
        v-for="(row, index) in row.children"
        :key="index"
        :row="row"
      />
    </ol>
  </li>
</template>

<script>
export default {
  name: 'AposTreeRow',
  props: {
    row: Object,
    columns: Array
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
.apos-tree--row .apos-tree--list .apos-tree--row-data {
  padding-left: 24px;
}
</style>
