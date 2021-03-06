
<template>
  <div ref="root">
    <draggable
      class="apos-slat-list" tag="ol"
      v-model="items" role="list"
      v-bind="dragOptions" :move="onMove"
      @start="isDragging=true" @end="isDragging=false"
      :id="listId"
    >
      <transition-group type="transition" name="apos-slat-list-transition">
        <AposSlat
          @remove="remove" class="apos-slat-list__item"
          @engage="engage"
          @disengage="disengage"
          @move="move"
          v-for="item in items" :key="item.id"
          :item="item"
          :class="{'apos-slat-list__item--disabled' : !editable}"
          :engaged="engaged === item.id"
          :parent="listId"
        />
      </transition-group>
    </draggable>
  </div>
</template>

<script>
import AposSlat from './AposSlat.vue';
import draggable from 'vuedraggable';
export default {
  name: 'AposSlatList',
  components: {
    AposSlat,
    draggable
  },
  props: {
    initialItems: {
      type: Array,
      required: true
    },
    editable: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      isDragging: false,
      delayedDragging: false,
      items: this.initialItems,
      engaged: null
    };
  },
  computed: {
    listId() {
      return `sortableList-${(Math.floor(Math.random() * Math.floor(10000)))}`;
    },
    dragOptions() {
      return {
        animation: 0,
        disabled: !this.editable,
        ghostClass: 'is-dragging'
      };
    }
  },
  watch: {
    isDragging(newValue) {
      if (newValue) {
        this.delayedDragging = true;
        return;
      }
      this.$nextTick(() => {
        this.delayedDragging = false;
      });
    }
  },
  methods: {
    engage(id) {
      this.engaged = id;
    },
    disengage(id) {
      this.engaged = null;
    },
    remove(item, focusNext) {
      const itemIndex = this.getIndex(item.id);
      this.items = this.items.filter(i => item.id !== i.id);
      this.$emit('update', this.items);
      if (focusNext && this.items[itemIndex]) {
        this.focusElement(this.items[itemIndex].id);
        return;
      }
      if (focusNext && this.items[itemIndex - 1]) {
        this.focusElement(this.items[itemIndex - 1].id);
      }
    },
    move (id, dir) {
      const index = this.getIndex(id);
      const target = dir > 0 ? index + 1 : index - 1;
      if (this.items[target]) {
        this.items.splice(target, 0, this.items.splice(index, 1)[0]);
        this.focusElement(id);
      }
    },
    getIndex(id) {
      let i = null;
      this.items.forEach((item, index) => {
        if (item.id === id) {
          i = index;
        }
      });
      return i;
    },

    focusElement(id) {
      if (this.$refs.root.querySelector(`[data-id="${id}"]`)) {
        this.$nextTick(() => {
          this.$refs.root.querySelector(`[data-id="${id}"]`).focus();
        });
      }
    },

    onMove({ relatedContext, draggedContext }) {
      const relatedElement = relatedContext.element;
      const draggedElement = draggedContext.element;
      return (
        (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
      );
    }
  }
};
</script>

<style lang="scss" scoped>
  @import '../../scss/_mixins';
  @import '../../scss/_inputs.scss';
  .apos-slat-list /deep/ .apos-slat {
    margin-bottom: 5px;
    transition: all 0.4s;
  }

  .apos-slat-list-transition-leave-to {
    opacity: 0;
  }

  .is-dragging {
    opacity: 0.5;
    background: var(--a-base-4);
  }

  .apos-slat-list {
    @include apos-list-reset();
    min-height: 20px;
    max-width: $input-max-width * 0.75;
  }

</style>
