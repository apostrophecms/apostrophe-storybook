<template>
  <table class="apos-table">
    <caption
      class="apos-table__caption apos-sr-only"
      role="alert"
      aria-live="polite"
    >
      {{
        data.caption
      }}
    </caption>
    <slot name="tableHeader">
      <AposTableHeader :columns="data.header" :selectable="selectable" />
    </slot>
    <tbody class="apos-table__body" v-if="rows.length">
      <slot name="tableRow">
        <AposTableRow
          v-for="(row, index) in rows"
          :key="index"
          :row="row"
          :id="index"
          :selectable="selectable"
        />
      </slot>
    </tbody>
    <tbody v-else class="apos-table__body">
      <tr class="apos-table__row">
        <td class="apos-table__cell-empty" :colspan="data.header.length">
          Nothing to see here... Move along
        </td>
      </tr>
    </tbody>
  </table>
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
    data: Object,
    selectable: {
      type: Boolean,
      default: false
    },
    headerOffset: 1
  },
  computed: {
    rows() {
      // Determine which properties of each object we want to show
      const columns = this.$props.data.header.map(column => column.name);

      // Get the data from the objects.
      const rows = this.$props.data.rows.map(row =>
        columns.map(column => {
          // If there's an edit column, auto add an edit column the row.
          // This could also be an action, just wasn't sure exactly what needed to get passed to edit
          if (column === 'edit') {
            return {
              name: column,
              value: row.url
            };
          } else {
            return {
              name: column,
              value: row[column]
            };
          }
        })
      );

      return rows;
    }
  },
  methods: {
    sort(action) {
      this.$emit('sort', action);
    }
  }
};
</script>

<style lang="scss">
@import '../../sharedScss/_tables';
.apos-table__cell-empty {
  text-align: center;
}
</style>
