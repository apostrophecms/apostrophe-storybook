<template>
  <AposInputWrapper :field="field" :error="error">
    <template slot="body">
      <input type="radio" :id="uid + '-true'" :value="true" v-model="next">
      <label :for="uid + '-true'">Yes</label>
      <input type="radio" :id="uid + '-false'" :value="false" v-model="next">
      <label :for="uid + '-false'">No</label>
    </template>
  </AposInputWrapper>
</template>

<script>
import AposInputWrapper from '../AposInputWrapper';
import AposInputMixin from '../../mixins/AposInputMixin';

export default {
  components: {
    AposInputWrapper
  },
  mixins: [ AposInputMixin ],
  name: 'ApostropheBooleanField',
  methods: {
    validate(value) {
      if (this.field.mandatory) {
        if (!value) {
          return 'mandatory';
        }
      }
      return false;
    }
  }
};
</script>
