<!--
  AposSchema takes an array of fields with their values, renders their inputs, and emits their `input` events
-->
<template>
  <div class="apos-schema">
    <div v-for="field in schema" :key="field.name">
      <component
        :is="fieldComponentMap[field.type]" :field="fields[field.name].field"
        :status="fields[field.name].status" :value="fields[field.name].value"
        @input="input($event, field.name)" :modifiers="fields[field.name].modifiers"
      />
    </div>
  </div>
</template>

<script>
import AposButton from './../button/AposButton';
import AposStringInput from '../inputString/AposStringInput.vue';
import AposBooleanInput from '../inputBoolean/AposBooleanInput.vue';

export default {
  name: 'AposSchema',
  components: {
    AposButton,
    AposStringInput,
    AposBooleanInput
  },
  props: {
    schema: {
      type: Array,
      required: true
    },
    doc: {
      type: Object,
      default() {
        return {};
      }
    },
    modifiers: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      fieldComponentMap: {
        string: 'AposStringInput',
        boolean: 'AposBooleanInput'
      }
    };
  },
  computed: {
    fields: function() {
      const fields = {};
      this.schema.forEach((item) => {
        fields[item.name] = {};
        fields[item.name].field = { ...item };
        if (item.type === 'checkbox') {
          // do array
        } else {
          // all other string value formats
          fields[item.name].value = {
            data: this.doc[item.name]
          };
        }
        // TODO populate a dynamic status
        fields[item.name].status = {};

        fields[item.name].modifiers = this.modifiers;

        // final difference smoothing
        if (item.type === 'string') {
          fields[item.name].field.type = 'text';
        }
      });
      return fields;
    }
  },
  methods: {
    input(value, name) {
      this.$emit('input', name, value);
    }
  }
};
</script>

<style lang="scss" scoped>
  @import '../../scss/_mixins';
  .apos-schema /deep/ .apos-field {
    margin-bottom: 30px;
  }
</style>
