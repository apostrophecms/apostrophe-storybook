<template>
  <div class="apos-tree">
    <h1>blues</h1>
    <AposTreeHeader
      :columns="spacingRow" :spacer-only="true"
      @calculated="setWidths"
    />
    <AposTreeHeader :columns="data.headers" :col-widths="colWidths" />
    <ol class="apos-tree--list">
      <AposTreeRow
        v-for="(row, index) in data.rows"
        :key="index"
        :row="row"
        :columns="columns"
        :col-widths="colWidths"
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
    data: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      colWidths: null
    };
  },
  computed: {
    columns() {
      return this.data.headers.map(column => column.name);
    },
    spacingRow() {
      let spacingRow = {};
      // Combine the header with the rows, the limit to a reasonable 50 rows.
      const headers = {};
      if (this.data.headers) {
        this.data.headers.forEach(header => {
          headers[header.name] = header.label;
        });
      }

      let completeRows = [headers].concat(this.data.rows);
      completeRows = completeRows.slice(0, 50);

      // Loop over the combined header/rows array, finding the largest value
      // for each key.
      completeRows.forEach(row => {
        if (spacingRow.length === 0) {
          console.info('2', row);
          spacingRow = Object.assign({}, row);
          return;
        }
        this.columns.forEach(key => {
          if (
            !spacingRow[key] ||
            (spacingRow[key] &&
            spacingRow[key].toString().length < row[key].toString().length)
          ) {
            spacingRow[key] = row[key];
          }
        });
      });
      // Place that largest value on that key of the spacingRow object.
      // Put that array in the DOM, and generate styles to be passed down based on its layout. Give the first column any leftover space.
      const finalRow = [];
      this.columns.forEach(col => {
        finalRow.push({
          name: col,
          label: spacingRow[col]
        });
      });
      return finalRow;
    }
  },
  methods: {
    setWidths(widths) {
      this.colWidths = widths;
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
  box-sizing: border-box;
}
</style>
