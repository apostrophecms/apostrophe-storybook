<template>
  <AposInputWrapper :field="field" :error="status.error" :uid="uid">
    <template slot="body">
      <div class="apos-input-wrapper apos-input-join">
        <div class="apos-input-join__input-wrapper">
          <input class="apos-input apos-input--text apos-input--join"
            v-model="next" :type="type" :placeholder=field.placeholder
            :disabled="status.disabled" :required="field.required" :id="uid">
          <AposButton
            :label="field.browseLabel"
            type="input"
            v-bind:modifiers="['small']"
          />
        </div>
      </div>
    </template>
  </AposInputWrapper>
</template>



<script>
import AposInputWrapper from '../AposInputWrapper';
import AposButton from '../button/AposButton.vue';
import AposInputMixin from '../../mixins/AposInputMixin.js';

export default {
  components: {
    AposInputWrapper,
    MenuDown,
    AposButton
  },
  mixins: [ AposInputMixin ],
  name: 'AposJoinInput',
  computed: {

  },
  methods: {
    validate(value) {
      if (this.field.required && !value.length) {
        return 'required';
      }

      return false;
    }
  }
};
</script>

<style lang="scss" scoped>
  .apos-input-join__input-wrapper {
    display: flex;
    align-items: center;
  }
  .apos-button {
    position: absolute;
    right: 7.5px;
  }
</style>
