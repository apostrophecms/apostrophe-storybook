<template>
  <AposInputWrapper :field="field" :error="status.error" >
    <template slot="body">
      <AposCheckbox 
        :for="getChoiceId(uid, choice.value)"
        v-for="choice in field.choices" 
        :key="choice.value" 
        :id="getChoiceId(uid, choice.value)"
        :choice="choice"
        :field="field"
        :value="value"
        :status="status"
        v-on:toggle="update"
      />
    </template>
  </AposInputWrapper>
</template>

<script>
import AposCheckbox from './AposCheckbox';
import AposInputWrapper from '../AposInputWrapper';
import AposInputMixin from '../../mixins/AposInputMixin';

export default {
  name: 'AposCheckboxInput',
  mixins: [ AposInputMixin ],
  components: {
    AposInputWrapper,
    AposCheckbox
  },
  methods: {
    update(newValue) {
      if (this.value.data.includes(newValue)) {
        this.value.data = this.value.data.filter(item => item !== newValue);
      } else {
        this.value.data.push(newValue);
      }
    },
    getChoiceId(uid, value) {
       return uid + value.replace(/\s/g, '');
    },
    validate(values) {
      if (!Array.isArray(this.field.choices)) {
        return 'malformed';
      }

      if (this.field.required &&
        !Array.isArray(values) && (!values || !values.length)) {
        return 'required';
      }

      if (Array.isArray(values)) {
        values.forEach(chosen => {
          if (!this.field.choices.map(choice => { return choice.value}).includes(chosen)) {
            return 'selected'
          }
        });
      }

      return false;
    }
  },
  beforeMount: function () {
    this.value.data = Array.isArray(this.value.data) ? this.value.data : [];
  }
}
</script>
