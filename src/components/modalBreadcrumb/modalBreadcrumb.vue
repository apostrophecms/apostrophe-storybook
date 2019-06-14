<template>
  <nav class="apos-breadcrumb" aria-label="breadcrumb">
    <ol class="apos-breadcrumb__items">
      <li v-for="item in items" :class="`apos-breadcrumb__item ${modifier}`">
        <component :is="item.href ? 'a' : 'span'" :href="item.href">{{ item.label }}</component>
      </li>
    </ol>
  </nav>
</template>

<script>
module.exports = {
  props: {
    label: {
      default: 'Set a label',
      type: String
    },
    modifier: {
      default: '',
      type: String
    },
    items: {
      default: [],
      type: Array
    }
  }
}
</script>

<style lang="scss">
</style>
