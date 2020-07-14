<template>
  <div class="apos-tree">
    <AposTreeHeader
      :headers="spacingRow" :spacer-only="true"
      @calculated="setWidths"
    />
    <AposTreeHeader :headers="data.headers" :col-widths="colWidths" />
    <ol class="apos-tree--list">
      <AposTreeRow
        v-for="(row, index) in data.rows"
        :key="index"
        :row="row"
        :headers="data.headers"
        :col-widths="colWidths"
        :level="1"
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
    spacingRow() {
      let spacingRow = {};
      // Combine the header with the rows, the limit to a reasonable 50 rows.
      const headers = {};
      if (this.data.headers) {
        this.data.headers.forEach(header => {
          headers[header.name] = header.label;
        });
      }

      let completeRows = [headers];
      // Add child rows into `completeRows`.
      this.data.rows.forEach(row => {
        completeRows.push(row);

        if (row.children) {
          completeRows = completeRows.concat(row.children);
        }
      });
      completeRows = completeRows.slice(0, 50);

      // Loop over the combined header/rows array, finding the largest value
      // for each key.
      completeRows.forEach(row => {
        if (spacingRow.length === 0) {
          spacingRow = Object.assign({}, row);
          return;
        }

        this.data.headers.forEach(col => {
          const key = col.name;
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
      this.data.headers.forEach(col => {
        finalRow.push({
          name: col.name,
          label: spacingRow[col.name]
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
.apos-tree {
  font-size: map-get($font-sizes, default);
}

.apos-tree--list {
  width: 100%;
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 0;
  list-style-type: none;
}

// NOTE: Row and cell styles are here since they're shared between the header and the row

.apos-tree--row-data {
  display: flex;
  width: 100%;
}

.apos-tree__cell {
  display: inline-flex;
  flex-shrink: 2;
  padding: 16px;
  border-bottom: 1px solid var(--a-base-9);
  box-sizing: border-box;

  &:first-child {
    flex-grow: 1;
    flex-shrink: 1;
  }
}

.apos-tree__cell__icon {
  display: inline-flex;
  align-items: flex-start;
  margin-right: 10px;
  padding-top: 0.2em;

  .material-design-icon__svg {
    width: 12px;
    height: 12px;
  }

  .apos-tree__cell--icon & .material-design-icon__svg {
    width: 18px;
    height: 18px;
  }

  .apos-tree__cell--icon & {
    padding-top: 0;
  }
}
</style>
