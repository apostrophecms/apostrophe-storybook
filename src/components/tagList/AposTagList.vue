<template>
  <div class="apos-tag-list">
    <h3 class="apos-tag-list__title">{{ title }}</h3>
    <ul class="apos-tag-list__items">
      <AposTagListItem 
        v-for="tag in tags" 
        v-bind:key="tag.slug"
        v-on:click="click"
        :tag="tag"
      />
    </ul>
  </div>
</template>

<script>
import AposTagListItem from './AposTagListItem.vue';
export default {
  props: {
    tags: {
      type: Array,
      required: true
    },
    title: {
      default: 'Tag List',
      type: String
    },

  },
  components: { AposTagListItem },
  data() {
    return {
      active: []
    }
  },
  methods: {
    click(slug) {
      // tell parent modal something was clicked
      this.$emit('tagClick', slug);
    }
  }
}
</script>

<style lang="scss">
@import '../../scss/_mixins';

.apos-tag-list {
  margin: 20px 0 0 10px;
}
.apos-tag-list__title {
  margin: 0 0 10px 10px;
  font-weight: 500;
  font-size: map-get($font-sizes, rail-title);
}
.apos-tag-list__items {
  @include apos-list-reset();
}

</style>
