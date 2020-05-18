<template>
  <div class="apos-tag-list">
    <div v-if="tags && tags.length" class="apos-tag-list__inner">
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
    <div v-else class="apos-tag-list__empty">
      <p class="apos-hint apos-tag-list__empty-text">Tag your images to make searching and filtering the media manager easier!</p>
      <span class="apos-emoji apos-tag-list__empty-icon">🗂️</span>
    </div>
  </div>
</template>

<script>
import AposTagListItem from './AposTagListItem.vue';
export default {
  props: {
    tags: {
      type: Array
    },
    title: {
      default: 'Filter by Tag',
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
  display: flex;
  height: 100%;
  width: 100%;
}
.apos-tag-list__inner {
  margin: 30px 0 0 30px;
}
.apos-tag-list__title {
  margin-bottom: 15px;
  font-weight: 500;
  font-size: map-get($font-sizes, default);
  color: var(--a-base-3);
  font-weight: 700;
}
.apos-tag-list__items {
  @include apos-list-reset();
}

.apos-tag-list__empty {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
}

.apos-tag-list__empty-text {
  text-align: center;
}

</style>
