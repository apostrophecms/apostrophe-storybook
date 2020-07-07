<template>
  <thead class="apos-table__head">
    <tr class="apos-table__head-row">
      <th
        class="apos-table__head-cell"
        v-for="column in columns"
        :key="column.name"
      >
        <!-- this could also be a "component"-->
        {{ column.label }}
      </th>
    </tr>
  </thead>
</template>

<script>
export default {
  name: 'AposTableHead',
  props: {
    columns: Array
  }
};
</script>

<style lang="scss">
@import '../../sharedScss/_tables';
</style>
