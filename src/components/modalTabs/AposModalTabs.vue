<template>
  <div class="apos-modal-tabs">
    <ul class="apos-modal-tabs__tabs">
      <li class="apos-modal-tabs__tab" v-for="(group, i) in groups"
        :key="group.name">
        <button :id="group.uid + i" class="apos-modal-tabs__btn" @click="selectTab"
          :aria-selected="group.uid + i === current ? true : false"
        >{{ group.label }}</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AposModalTabs',
  props: {
    groups: Array,
    current: Number
  },
  methods: {
    selectTab: function (e) {
      const tab = e.target;
      const id = tab.id;
      this.$emit('selectTab', Number(id));
    }
  }
}
</script>

<style lang="scss" scoped>
.apos-modal-tabs {
  display: flex;
  height: 100%;
}

.apos-modal-tabs__tabs {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0;
  padding: 0;
  background-color: var(--a-base-9);
}

.apos-modal-tabs__tab {
  display: block;

}

.apos-modal-tabs__btn {
  position: relative;
  width: 100%;
  margin: 0;
  padding: 25px 20px;
  border-width: 0;
  border-bottom: 1px solid var(--a-base-4);
  border-radius: 0;
  color: var(--a-text-primary);
  background-color: var(--a-base-9);
  font-size: map-get($font-sizes, modal);
  letter-spacing: 0.5px;
  text-align: left;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 0;
    background-color: var(--a-primary);
    transition: width .25s cubic-bezier(0, 1.61, 1, 1.23);
  }

  &[aria-selected='true'],
  &:hover,
  &:focus {
    background-color: var(--a-background-primary);
  }

  &[aria-selected='true'] {
    &::before {
      width: 6px;
    }
  }
}
</style>
