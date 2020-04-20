<template>
  <li class="apos-tag-list__item">
    <button :class="{'is-active' : active}" class="apos-tag-list__button" @click="click(tag)">
      <transition name="slide-fade" mode="out-in" duration="100">
        <Close v-if="this.active" class="apos-tag-list__icon apos-tag-list__icon--remove" :size="13"/>
        <Tag v-else class="apos-tag-list__icon apos-tag-list__icon--tag" :size="13" />
      </transition>
      <span class="apos-tag-list__label">{{ tag.label }}</span>
    </button>
  </li>
</template>

<script>
import AposTagListItem from './AposTagListItem.vue';
import Tag from 'vue-material-design-icons/Label.vue';
import Close from 'vue-material-design-icons/Close.vue';
export default {
  props: {
    tag: Object
  },
  data() {
    return {
      active: false
    }
  },
  components: { 
    AposTagListItem,
    Tag,
    Close
  },
  methods: {
    click(tag) {
      this.active = !this.active;
      this.$emit('click', tag.slug)
    }
  }
}
</script>

<style lang="scss">
@import '../../scss/_mixins';
.apos-tag-list__item {
  display: block;
  margin-bottom: 5px;
}
.apos-tag-list__button {
  @include apos-button-reset();
  display: flex;
  align-items: center;
  padding: 7.5px 10px;
  border-radius: 5px;
  background: transparent;
  @include apos-transition(all, .1s, ease-in-out);
  &.is-active {
    background-color: var(--a-primary);
    color: var(--a-white);
  }
  &:hover {
    background-color: var(--a-base-8);
    .apos-tag-list__icon--tag {
      color: var(--a-base-2);
    }
  }
  &:hover.is-active {
    background-color: var(--a-primary-button-hover);
    color: var(--a-white);
  }
}

.apos-tag-list__icon--remove {
  position: relative;
  top: 1px;
}

.apos-tag-list__icon--tag {
  color: var(--a-base-6);
}

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(2px);
  opacity: 0;
}

.apos-tag-list__icon {
  display: inline-flex;
  margin-right: 5px;
}

.apos-tag-list__label {
  font-size: map-get($font-sizes, default);
}

</style>
