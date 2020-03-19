import { storiesOf } from '@storybook/vue';

import AposStringInput from './AposStringInput.vue';

const field = {
  mandatory: false,
  name: 'plancksConstant',
  type: 'text',
  label: 'What is Planck\'s constant?',
  placeholder: 'Enter the number.'
};

const dateField = {
  ...field,
  icon: 'Calendar'
};

const requiredField = {
  ...field,
  mandatory: true
};

const helpField = {
  ...field,
  help: 'Sing the Neverending Story theme song.'
};

const textAreaField = {
  ...field,
  type: 'textarea',
  help: 'Sing the Neverending Story theme song.'
};

const baseTemplate = `<AposStringInput :field="field" :value="value" :status="status"/>`;

storiesOf('Inputs (strings)', module)
  .add('Text', () => ({
    components: { AposStringInput },
    data () {
      return {
        field,
        status: {},
        value: {
          data: ''
        }
      };
    },
    template: baseTemplate
  }))
  .add('Text, disabled', () => ({
    components: { AposStringInput },
    data () {
      return {
        field,
        status: {
          disabled: true
        },
        value: {
          data: ''
        }
      };
    },
    template: baseTemplate
  }))
  .add('Text, error', () => ({
    components: { AposStringInput },
    data () {
      return {
        field,
        status: {
          error: {
            type: 'invalid',
            message: 'Not a valid email address'
          }
        },
        value: {
          data: ''
        }
      };
    },
    template: baseTemplate
  }))
  .add('Text with Icon', () => ({
    components: { AposStringInput },
    data () {
      return {
        field: dateField,
        status: {},
        value: {
          data: ''
        }
      };
    },
    template: baseTemplate
  }))
  .add('Required', () => ({
    components: { AposStringInput },
    data () {
      return {
        field: requiredField,
        status: {},
        value: {
          data: ''
        }
      };
    },
    template: baseTemplate
  }))
  .add('With help text', () => ({
    components: { AposStringInput },
    data () {
      return {
        field: helpField,
        status: {},
        value: {
          data: ''
        }
      };
    },
    template: baseTemplate
  }))
  .add('Textarea', () => ({
    components: { AposStringInput },
    data () {
      return {
        field: textAreaField,
        status: {},
        value: {
          data: ''
        }
      };
    },
    template: baseTemplate
  }));
