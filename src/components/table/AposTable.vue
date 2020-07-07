<template>
  <div>
    <table class="apos-table" v-if="data">
      <caption class="apos-table__caption" role="alert" aria-live="polite">
        {{
          data.caption
        }}
      </caption>
      <AposTableHeader :columns="data.header" />
      <tbody class="apos-table__body">
        <AposTableRow v-for="(row, index) in rows" :key="index" :row="row" />
      </tbody>
    </table>
    <div v-else class="apos-table__empty">
      Nothing to see here... Move along
    </div>
  </div>
</template>

<script>
import AposTableHeader from './AposTableHeader';
import AposTableRow from './AposTableRow';

export default {
  name: 'AposTable',
  components: {
    AposTableHeader,
    AposTableRow
  },
  props: {
    data: Object
  },
  computed: {
    rows() {
      const columns = this.$props.data.header.map(column => column.name);
      return this.$props.data.rows.map(row =>
        columns.map(column => row[column])
      );
    }
  },
  methods: {}
};
</script>

<style lang="scss">
@import '../../sharedScss/_tables';
</style>
