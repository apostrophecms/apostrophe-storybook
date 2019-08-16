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
        <!-- Temporary demo content: -->
        <h2>Tab {{ i }}: {{ group.label }}</h2>
        <div style="min-height: 70vh"></div>
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
.c-modal-tabs {
  display: flex;
  height: 100%;
}

.c-modal-tabs__tabs {
  display: flex;
  flex-direction: column;
  width: 32%;
  margin: 0;
  padding: 0;
  background-color: var(--background-alt);
}

.c-modal-tabs__tab {
  display: block;

}

.c-modal-tabs__btn {
  position: relative;
  width: 100%;
  margin: 0;
  padding: 25px 20px;
  border-width: 0;
  border-bottom: 1px solid var(--border-color);
  border-radius: 0;
  background-color: var(--background-alt);
  font-size: map-get($font-sizes, modal);
  text-align: left;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 0;
    background-color: var(--primary);
    transition: width .25s ease;
  }

  &[aria-selected='true'],
  &:hover,
  &:focus {
    background-color: var(--background);
  }

  &[aria-selected='true'] {
    &::before {
      width: 6px;
    }
  }
}

.c-modal-tabs__wrapper {
  display: flex;
  flex-grow: 1;
}

.c-modal-tabs__pane {
  width: 100%;
  margin: 0;
  padding: 40px 60px;
  border-width: 0;

  &[aria-hidden='true'] { display: none; }
}
</style>
