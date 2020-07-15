<template>
  <div class="apos-tree" :class="{ 'apos-tree--nested': nested }">
    <AposTreeHeader
      :headers="spacingRow" :spacer-only="true"
      @calculated="setWidths"
    />
    <AposTreeHeader :headers="data.headers" :col-widths="colWidths" />
    <AposTreeRows
      :rows="data.rows"
      :headers="data.headers"
      :col-widths="colWidths"
      :level="1"
      :nested="nested"
      @busy="setBusy"
      @update="update"
      list-id="root"
      :draggable="draggable"
    />
  </div>
</template>

<script>
import AposTreeHeader from './AposTreeHeader';
import AposTreeRows from './AposTreeRows';
import treeData from './data';

export default {
  name: 'AposTree',
  components: {
    AposTreeHeader,
    AposTreeRows
  },
  data() {
    return {
      // Copy the `data` property to mutate with VueDraggable.
      nested: false,
      colWidths: null
    };
  },
  computed: {
    data() {
      return treeData;
    },
    draggable() {
      // In practice this will be set directly since many
      return treeData.draggable;
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

      let completeRows = [headers];
      // Add child rows into `completeRows`.
      this.data.rows.forEach(row => {
        completeRows.push(row);

        if (row.children) {
          this.nested = true;
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
        let obj;
        const foundIndex = this.data.headers.findIndex(o => {
          return o.name === col.name;
        });
        const spacerInfo = {
          name: col.name,
          label: spacingRow[col.name]
        };

        if (foundIndex > -1) {
          // Deep copy the original header column to capture all options.
          const foundObj = JSON.parse(JSON.stringify(this.data.headers[foundIndex]));

          if (foundObj.iconOnly) {
            // If the "column" will only show icons, let the "column header"
            // set the width.
            delete spacerInfo.label;
          }

          obj = Object.assign(foundObj, spacerInfo);
        } else {
          obj = spacerInfo;
        }

        finalRow.push(obj);
      });
      return finalRow;
    }
  },
  methods: {
    setWidths(widths) {
      this.colWidths = widths;
    },
    setBusy(val) {
      this.$emit('busy', val);
    },
    update(event) {
      this.$emit('update', {
        // The ID of the item that moved.
        changedId: event.item.dataset.rowId,
        // The ID of the original parent, or 'root' if top-level.
        startContext: event.from.dataset.listId,
        // The index of the moved item within its original context.
        startIndex: event.oldIndex,
        // The ID of the new parent, or 'root' if top-level.
        endContext: event.to.dataset.listId,
        // The index of the moved item within its new context.
        endIndex: event.newIndex
      });
      this.setBusy(false);
    }
  }
};
</script>

<style lang="scss">
.apos-tree {
  font-size: map-get($font-sizes, default);
}

.apos-tree__list {
  width: 100%;
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 0;
  list-style-type: none;
}

// NOTE: Row and cell styles are here since they're shared between the header and the row

.apos-tree__row-data {
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
