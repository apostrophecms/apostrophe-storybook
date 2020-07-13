<template>
  <div class="apos-tree--row-data">
    <span
      v-for="(column, index) in columns"
      :key="`${index}-${column.name}`"
      class="apos-tree--cell"
      :class="`apos-tree--column-${column.name}`"
    >
      {{ column.label }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'AposTreeHeader',
  props: {
    columns: Array
  }
};
</script>

<style lang="scss">
.apos-tree--header {
  display: flex;
  width: 100%;
}
</style>
