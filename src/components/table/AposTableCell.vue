<template>
  <td class="apos-table__cell">
    {{ cell }}
  </td>
</template>

<script>
export default {
  name: 'AposTableCell',
  props: {
    cell: String
  }
};
</script>

<style lang="scss">
@import '../../sharedScss/_tables';
</style>
