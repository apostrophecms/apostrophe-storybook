<template>
  <AposInputWrapper
    :field="field" :error="status.error"
    :uid="uid"
  >
    <template #body>
      <div class="apos-input-wrapper apos-input-join">
        <div class="apos-input-join__input-wrapper">
          <input
            class="apos-input apos-input--text apos-input--join"
            v-model="next" type="text"
            :placeholder="field.placeholder"
            :disabled="status.disabled" :required="field.required"
            :id="uid"
          >
          <AposButton
            :label="field.browseLabel"
            :modifiers="['small']"
            type="input"
          />
        </div>
        <AposSlatList @update="updated" :initial-items="listItems" />
      </div>
    </template>
  </AposInputWrapper>
</template>

<script>
import AposInputWrapper from '../AposInputWrapper';
import AposButton from '../button/AposButton.vue';
import AposInputMixin from '../../mixins/AposInputMixin.js';
import AposSlatList from '../slat/AposSlatList.vue';

export default {
  name: 'AposJoinInput',
  components: {
    AposInputWrapper,
    AposButton,
    AposSlatList
  },
  mixins: [ AposInputMixin ],
  props: {
    listItems: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    validate(value) {
      if (this.field.required && !value.length) {
        return 'required';
      }

      return false;
    },
    updated(items) {
      console.log('Heard update');
      console.log(items);
    }
  }
};
</script>

<style lang="scss" scoped>
  .apos-input-join__input-wrapper {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
  .apos-button {
    position: absolute;
    right: 7.5px;
  }
</style>
