<template>
  <tr class="apos-table__row">
    <AposTableCell v-for="(cell, index) in row" :key="index" :cell="cell" />
  </tr>
</template>

<script>
import AposTableCell from './AposTableCell';

export default {
  name: 'AposTableRow',
  components: {
    AposTableCell
  },
  props: {
    row: Array
  }
};
</script>

<style lang="scss">
@import '../../sharedScss/_tables';
</style>
