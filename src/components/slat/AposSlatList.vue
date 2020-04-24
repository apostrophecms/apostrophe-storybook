
<template>
  <vddl-list class="apos-slat-list"
    :list="items"
    :inserted="handleInserted"
    :dragover="handleDragover"
    :drop="handleDrop"
    :horizontal="false">
    <vddl-draggable class="apos-slat-list__item" 
      v-for="(item, index) in items" 
      :key="item.id"
      :draggable="item"
      :index="index"
      :wrapper="items"
      effect-allowed="move"
      :selected="selectedEvent"
      :dragstart="handleDragstart"
      :dragend="handleDragend"
      :canceled="handleCanceled"
      :moved="handleMoved"
      v-bind:class="{'selected': selected === item}"
    >
      <AposSlat :item="item" />
    </vddl-draggable>
    <vddl-placeholder class="apos-slat-list__placeholder"></vddl-placeholder>
  </vddl-list>
</template>

<script>
import AposSlat from './AposSlat.vue';
import Vddl from 'vddl';
import Vue from 'vue';
Vue.use(Vddl);
export default {
  name: 'AposSlatList',
  components: { AposSlat },
  data() {
    return {
      selected: null
    }
  },
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  methods: {
    selectedEvent: function(item){
      this.selected = item;
    },
    handleDragstart() {
      console.log(':v-draggable: dragstart');
    },
    handleDragend() {
      console.log(':v-draggable: dragend');
    },
    handleCanceled() {
      console.log(':v-draggable: canceled');
    },
    handleInserted() {
      console.log(':v-list: inserted');
    },
    handleDrop(data) {
      console.log(':v-list: drop');
      console.log(data);
      const { index, list, item } = data;
      // change the id
      item.id = new Date().getTime();
      list.splice(index, 0, item);
    },
    handleMoved(item) {
      console.log(':v-draggable: moved');
      console.log(item);
      const { index, list } = item;
      list.splice(index, 1);
    },
    handleDragover() {
      console.log(':v-list: handleDragover');
    },
  },
};
</script>

<style lang="scss">
  @import '../../scss/_mixins';
  .apos-slat-list__placeholder {
    height: 2px;
    margin: 5px 0;
    background-color: var(--a-primary);
  }
  .apos-slat-list /deep/ .apos-slat {
    margin-bottom: 5px;
  }
</style>
