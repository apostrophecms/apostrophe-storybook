<template>
  <div class="apos-tree">
    <AposTreeHeader :columns="data.headers" />
    <ol class="apos-tree--list">
      <AposTreeRow
        v-for="(row, index) in data.rows"
        :key="index"
        :row="row"
        :columns="columns"
      />
    </ol>
  </div>
</template>

<script>
import AposTreeHeader from './AposTreeHeader';
import AposTreeRow from './AposTreeRow';

export default {
  name: 'AposTree',
  components: {
    AposTreeHeader,
    AposTreeRow
  },
  props: {
    data: Object
  },
  computed: {
    columns() {
      return this.data.headers.map(column => column.name);
    }
  }
};
</script>

<style lang="scss">
.apos-tree--list {
  width: 100%;
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 0;
  list-style-type: none;
}

// NOTE: Row and cell styles are here since they're shared between the header and the row

.apos-tree--row-data {
  display: table;
  width: 100%;
}

.apos-tree--cell {
  display: table-cell;
  padding: 12.5px 4.5px;
  border-bottom: 1px solid var(--a-base-9);
}

.apos-tree--column-title {
  width: 50vw;
}
</style>
