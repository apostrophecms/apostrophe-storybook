<template>
  <div class="apos-tag-list">
    <div v-if="tags && tags.length" class="apos-tag-list__inner">
      <h3 class="apos-tag-list__title">{{ title }}</h3>
      <ul class="apos-tag-list__items">
        <AposTagListItem
          v-for="tag in tags"
          :key="tag.slug"
          @click="click"
          :tag="tag"
        />
      </ul>
    </div>
    <div v-else class="apos-tag-list__empty">
      <AposEmptyState :empty-state="emptyState" />
    </div>
  </div>
</template>

<script>
import AposTagListItem from './AposTagListItem.vue';
import AposEmptyState from './../emptyState/AposEmptyState.vue';
export default {
  components: {
    AposEmptyState,
    AposTagListItem
  },
  props: {
    tags: {
      type: Array,
      default() {
        return [];
      }
    },
    title: {
      default: 'Filter by Tag',
      type: String
    }
  },
  data() {
    return {
      active: [],
      emptyState: {
        message: 'Tag your images to make searching and filtering the media manager easier'
      }
    };
  },
  methods: {
    click(slug) {
      // tell parent modal something was clicked
      this.$emit('tag-click', slug);
    }
  }
};
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
  margin: 0 1rem;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
}

.apos-tag-list__empty-text {
  text-align: center;
}

</style>
