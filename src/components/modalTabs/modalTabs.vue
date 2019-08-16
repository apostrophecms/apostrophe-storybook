<template>
  <div class="c-modal-tabs">
    <ul class="c-modal-tabs__tabs">
      <li class="c-modal-tabs__tab" v-for="(group, i) in groups"
        :key="group.name">
        <button :id="uid + i" class="c-modal-tabs__btn" @click="selectTab"
          :aria-selected="uid + i === current ? true : false"
        >{{ group.label }}</button>
      </li>
    </ul>
    <form class="c-modal-tabs__wrapper">
      <fieldset v-for="(group, i) in groups" :key="group.name" :ref="uid + i"
        :aria-labelledby="uid + i" class="c-modal-tabs__pane"
        :aria-hidden="uid + i === current ? false : true"
      >
        <h2>Tab {{ i }}: {{ group.label }}</h2>
      </fieldset>
    </form>
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
      const focusable = pane.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');

      if (focusable.length > 0) {
        focusable[0].focus();
      } else {
        pane.focus();
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
