<template>
  <li>
    <AposCheckboxInput v-on:input="update" :field="field" :value="value" :status="status" />
  </li>
</template>

<script>
  import AposCheckboxInput from '../inputCheckbox/AposCheckboxInput.vue';

  export default {
    props: {
      tag: {
        type: Object,
        required: true
      }
    },
    components: { 
      AposCheckboxInput
    },
    data() {
      const choices = [{
        label: this.tag.label,
        value: this.tag.slug
      }];
      if (this.tag.partial) {
        choices[0].indeterminate = true
      }
      return {
        // value: (this.tag.checked || this.tag.partial) ? [this.tag.slug] : [],
        field: {
          name: this.tag.slug,
          type: 'checkbox',
          choices
        },
        status: {},
        value: {
          data: (this.tag.checked || this.tag.partial) ? [this.tag.slug] : []
        }
      }
    },
    mounted() {
    },
    watch: {
      'value.data': function(newVal, oldVal) {
        if (!newVal.length && this.field.choices[0].indeterminate) {
          console.log('hello?');
          // if we had a partial application and toggled the checkbox, fully activate it
          delete this.field.choices[0].indeterminate;
          this.update({ data: [this.field.choices[0].value] })
        }
      }
    },
    computed: {

    },
    methods: {
      update(response) {
        console.log(response);

        this.value.data = [];
        this.value.data = response.data;
        // this.$emit('updated', this.tag.slug, this.value);
        // console.log(response);
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../scss/_mixins';

</style>
