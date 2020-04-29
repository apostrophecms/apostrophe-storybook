<template>
  <th scope="col" class="apos-table__header">
    <component :is="el" @click="click" class="apos-table__header-label">
        <component 
          v-if="icon"
          :size="10"
          class="apos-table__header-icon"
          v-bind:is="icon"
        ></component>
      {{ header.label }}
    </component>
  </th>
</template>

<script>
import Tag from 'vue-material-design-icons/Label.vue';
import Close from 'vue-material-design-icons/Close.vue';
export default {
  props: {
    header: {
      required: true,
      type: Object
    }
  },
  data() {
    return {
    }
  },
  computed: {
    el() {
      if (this.header.action) {
        return 'button';
      } else {
        return 'span';
      }
    },
    icon() {
      if (this.header.icon) {
        return () => import(`vue-material-design-icons/${this.header.icon}.vue`);
      } else {
        return false;
      }
    }
  },
  components: { 
    // Tag,
  },
  methods: {
    click(tag) {
      this.active = !this.active;
      this.$emit('click', tag.slug)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/_mixins';
.apos-table__header {
  text-align: left;
  margin-bottom: 10px;
  padding: 10px 5px;
  border-bottom: 1px solid var(--a-base-8);
  font-weight: 400;
  color: var(--a-base-3);
}

.apos-table__header-label {
  @include apos-button-reset();
}
</style>
