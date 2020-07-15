<template>
  <VueDraggable
    tag="ol"
    class="apos-tree__list"
    :list="myRows"
    :group="{ name: 'g1' }"
    @start="startDrag"
    @end="endDrag"
    :data-list-id="listId"
    :disabled="!draggable"
  >
    <li
      class="apos-tree__row" v-for="row in myRows"
      :key="row.id" :data-row-id="row.id"
    >
      <div class="apos-tree__row-data">
        <component
          v-for="(col, index) in headers"
          :key="`${index}-${col.name}`"
          :is="col.name === 'url' ? 'a' : 'span'"
          :href="col.name === 'url' ? row[col.name] : false"
          :target="col.name === 'url' ? '_blank' : false"
          :class="getCellClasses(col, row)"
          :data-col="col.name"
          :style="getCellStyles(col.name, index)"
        >
          <component
            v-if="col.icon" :is="col.icon"
            class="apos-tree__cell__icon"
          />
          <span v-show="!col.iconOnly">
            {{ row[col.name] }}
          </span>
        </component>
      </div>
      <AposTreeRows
        v-if="row.children"
        :rows="row.children"
        :headers="headers"
        :col-widths="colWidths"
        :level="level + 1"
        :nested="nested"
        :list-id="row.id"
        :draggable="draggable"
        @busy="$emit('busy', $event)"
        @update="$emit('update', $event)"
      />
    </li>
  </VueDraggable>
</template>

<script>
import VueDraggable from 'vuedraggable';

export default {
  name: 'AposTreeRows',
  components: { VueDraggable },
  props: {
    headers: {
      type: Array,
      required: true
    },
    rows: {
      type: Array,
      required: true
    },
    colWidths: {
      type: Object,
      default () {
        return {};
      }
    },
    level: {
      type: Number,
      required: true
    },
    nested: {
      type: Boolean,
      required: true
    },
    draggable: {
      type: Boolean,
      required: true
    },
    listId: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      myRows: this.rows
    };
  },
  computed: {
    isOpen() {
      return true;
    }
  },
  methods: {
    startDrag() {
      this.$emit('busy', true);
    },
    endDrag(event) {
      this.$emit('update', event);
    },
    getCellClasses(col, row) {
      const classes = ['apos-tree__cell'];
      classes.push(`apos-tree__cell--${col.name}`);

      if (col.iconOnly) {
        classes.push('apos-tree__cell--icon');
      }

      // TODO: How does this work for i18n?
      if (col.name === 'published' && row[col.name] === 'Unpublished') {
        classes.push('apos-tree__cell--disabled');
      }

      return classes;
    },
    getCellStyles(name, index) {
      const styles = {};
      if (this.nested && index === 0 && this.colWidths && this.colWidths[name]) {
        styles.width = `${this.colWidths[name] - (24 * this.level)}px`;
      } else if (this.colWidths && this.colWidths[name]) {
        styles.width = `${this.colWidths[name]}px`;
      }

      return styles;
    }
  }
};
</script>

<style lang="scss">
.apos-tree__row {
  .apos-tree--nested & {
    padding-left: 24px;
  }
}

.apos-tree__cell--published {
  .material-design-icon__svg {
    fill: var(--a-success);
  }

  &.apos-tree__cell--disabled {
    color: var(--a-base-3);

    .material-design-icon__svg {
      fill: var(--a-base-3);
    }
  }
}
</style>
