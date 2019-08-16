<template>
  <div class="c-modal-tabs" data-tabbed>
    <ul class="c-modal-tabs__tabs">
      <li class="c-modal-tabs__tab" v-for="(group, index) in groups" :key="group.name">
        <button :data-tab="uid + index" :id="uid + index"
          class="c-modal-tabs__btn" @click="selectTab"
          :aria-selected="uid + index === current ? true : false"
        >{{ group.label }} {{ current }}</button>
      </li>
    </ul>
    <div class="c-modal-tabs__wrapper">
      <section
        :aria-hidden="uid + index === current ? false : true"
        :aria-labelledby="uid + index" class="c-modal-tabs__pane"
        v-for="(group, index) in groups" :key="group.name"
        :ref="uid + index"
      >
        <h2>Tab {{ index }}: {{ group.label }}</h2>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AposModalTabs',
  data () {
    return {
      uid: (Math.floor(Math.random() * Math.floor(10000))),
      current: 0
    }
  },
  props: {
    groups: Array
  },
  mounted: function () {
    this.current = this.uid;
  },
  methods: {
    selectTab: function (e) {
      const tab = e.target;
      const id = tab.id;
      this.current = Number(id);
      const pane = this.$refs[id][0];

      pane.focus();

      const focusable = pane.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');

      if (focusable.length > 0) {
        console.log(focusable[0]);
        focusable[0].focus();
      }
    }
  }
}
</script>

<style lang="scss" scoped>
$z-tab-content: 1;

.c-modal-tabs {
  display: flex;
}

.c-modal-tabs__tabs {
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
}

.c-modal-tabs__tab {
  display: block;

  .c-modal-tabs__btn {
    &[aria-selected='true'],
    &:hover,
    &:focus {
      color: blue;
    }
  }
}

.c-modal-tabs__wrapper {
  z-index: $z-tab-content;
  display: flex;
  flex-grow: 1;
}

.c-modal-tabs__pane {
  width: 100%;

  &[aria-hidden='false'] { display: flex; }
  &[aria-hidden='true'] { display: none; }
}
</style>
