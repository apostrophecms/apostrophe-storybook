<template>
  <div class="apos-modal-tabs">
    <form class="apos-modal-tabs__wrapper">
      <fieldset v-for="(group, i) in groups" :key="group.name" :ref="group.uid + i"
        :aria-labelledby="group.uid + i" class="apos-modal-tabs__pane"
        :aria-hidden="group.uid + i === current ? false : true"
      >
        <!-- Temporary demo content: -->
        <h2>Tab {{ i }}: {{ group.label }}</h2>
        <div style="min-height: 70vh"></div>
      </fieldset>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AposModalTabsBody',
  props: {
    groups: Array,
    current: Number
  }
}
</script>

<style lang="scss" scoped>
.apos-modal-tabs {
  display: flex;
  height: 100%;
}

.apos-modal-tabs__wrapper {
  display: flex;
  flex-grow: 1;
}

.apos-modal-tabs__pane {
  width: 100%;
  border-width: 0;
  &[aria-hidden='true'] { display: none; }
}
</style>
