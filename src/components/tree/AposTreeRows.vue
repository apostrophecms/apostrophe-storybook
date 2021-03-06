<template>
  <VueDraggable
    tag="ol"
    class="apos-tree__list"
    :list="myRows"
    :group="{ name: treeId }"
    @start="startDrag"
    @end="endDrag"
    :data-list-id="listId"
    :disabled="!draggable"
    handle=".apos-tree__row__handle"
  >
    <li
      class="apos-tree__row"
      :class="{ 'apos-tree__row--parent': row.children && row.children.length > 0 }"
      v-for="row in myRows" :key="row.id"
      :data-row-id="row.id"
    >
      <div class="apos-tree__row-data">
        <button
          v-if="row.children && row.children.length > 0"
          class="apos-tree__row__toggle"
          aria-label="Toggle section"
        >
          <chevron-down-icon :size="16" class="apos-tree__row__toggle-icon" />
        </button>
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
          <drag-icon
            v-if="draggable && index === 0" class="apos-tree__row__handle"
          />
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
        :tree-id="treeId"
        :draggable="draggable"
        @busy="$emit('busy', $event)"
        @update="$emit('update', $event)"
      />
    </li>
  </VueDraggable>
</template>

<script>
import VueDraggable from 'vuedraggable';
import DragIcon from 'vue-material-design-icons/Drag.vue';

export default {
  name: 'AposTreeRows',
  components: {
    VueDraggable,
    'drag-icon': DragIcon
  },
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
    },
    treeId: {
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
</style>
