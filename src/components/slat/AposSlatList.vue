
<template>
  <draggable class="apos-slat-list" tag="ul" v-model="items" 
    v-bind="dragOptions" :move="onMove" @start="isDragging=true" 
    @end="isDragging=false"
  >
    <transition-group type="transition" name="apos-slat-list-transition">
      <AposSlat 
        v-on:remove="remove" class="apos-slat-list__item" 
        v-for="item in items" :key="item.id" :item="item" 
        :class="{'apos-slat-list__item--disabled' : !editable}"
      />
    </transition-group>
  </draggable>
</template>

<script>
import AposSlat from './AposSlat.vue';
import draggable from 'vuedraggable'
export default {
  name: 'AposSlatList',
  components: { 
    AposSlat,
    draggable
  },
  data() {
    return {
      isDragging: false,
      delayedDragging: false,
      items: this.initialItems
    }
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
  computed: {
    dragOptions() {
      return {
        animation: 0,
        disabled: !this.editable,
        ghostClass: 'is-dragging'
      };
    },
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
    remove(item) {
      this.items = this.items.filter(i => item.id !== i.id);
      this.$emit('update', this.items)
    },
    onMove({ relatedContext, draggedContext }) {
      const relatedElement = relatedContext.element;
      const draggedElement = draggedContext.element;
      return (
        (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
      );
    }
  },
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
