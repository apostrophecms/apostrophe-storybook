import Vue from 'vue';
import { addDecorator } from '@storybook/vue';
import { withContexts } from '@storybook/addon-contexts/vue';
import { contexts } from './configs/contexts';

addDecorator(withContexts(contexts));

// Globally available icons
import CalendarIcon from 'vue-material-design-icons/Calendar.vue';
Vue.component('calendar-icon', CalendarIcon);