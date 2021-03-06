import Vue from 'vue';
import { addDecorator } from '@storybook/vue';
import { withContexts } from '@storybook/addon-contexts/vue';
import { contexts } from './configs/contexts';

addDecorator(withContexts(contexts));

// Globally available icons
import CalendarIcon from 'vue-material-design-icons/Calendar.vue';
import MagnifyIcon from 'vue-material-design-icons/Magnify.vue';
import ClockIcon from 'vue-material-design-icons/Clock.vue';
import PhoneIcon from 'vue-material-design-icons/Phone.vue';
import DotsVerticalIcon from 'vue-material-design-icons/DotsVertical.vue';
import LabelIcon from 'vue-material-design-icons/Label.vue';
import DeleteIcon from 'vue-material-design-icons/Delete.vue';
import MinuxBoxIcon from 'vue-material-design-icons/MinusBox.vue';
import CheckboxMarkedIcon from 'vue-material-design-icons/CheckboxMarked.vue';
import CheckboxBlankOutlineIcon from 'vue-material-design-icons/CheckboxBlankOutline.vue';
import ViewColumnIcon from 'vue-material-design-icons/ViewColumn.vue';
import ImageSizeSelectActualIcon from 'vue-material-design-icons/ImageSizeSelectActual.vue';
import ImageIcon from 'vue-material-design-icons/Image.vue';
import VideoIcon from 'vue-material-design-icons/Video.vue';
import InstagramIcon from 'vue-material-design-icons/Instagram.vue';
import WebIcon from 'vue-material-design-icons/Web.vue';
import CircleIcon from 'vue-material-design-icons/Circle.vue';
import CircleMediumIcon from 'vue-material-design-icons/CircleMedium.vue';
import AlertCircleIcon from 'vue-material-design-icons/AlertCircle.vue';
import RefreshIcon from 'vue-material-design-icons/Refresh.vue';
import CheckAllIcon from 'vue-material-design-icons/CheckAll.vue';
import CheckBoldIcon from 'vue-material-design-icons/CheckBold.vue';
import CloseIcon from 'vue-material-design-icons/Close.vue';
import PencilIcon from 'vue-material-design-icons/Pencil.vue';
import ChevronDownIcon from 'vue-material-design-icons/ChevronDown.vue';
import ChevronRightIcon from 'vue-material-design-icons/ChevronRight.vue';
import ChevronLeftIcon from 'vue-material-design-icons/ChevronLeft.vue';
import LinkIcon from 'vue-material-design-icons/Link.vue';

Vue.component('calendar-icon', CalendarIcon);
Vue.component('magnify-icon', MagnifyIcon);
Vue.component('clock-icon', ClockIcon);
Vue.component('phone-icon', PhoneIcon);
Vue.component('dots-vertical-icon', DotsVerticalIcon);
Vue.component('label-icon', LabelIcon);
Vue.component('delete-icon', DeleteIcon);
Vue.component('minus-box-icon', MinuxBoxIcon);
Vue.component('checkbox-marked-icon', CheckboxMarkedIcon);
Vue.component('checkbox-blank-icon', CheckboxBlankOutlineIcon);
Vue.component('view-column-icon', ViewColumnIcon);
Vue.component('image-size-select-actual-icon', ImageSizeSelectActualIcon);
Vue.component('image-icon', ImageIcon);
Vue.component('video-icon', VideoIcon);
Vue.component('instagram-icon', InstagramIcon);
Vue.component('web-icon', WebIcon);
Vue.component('circle-icon', CircleIcon);
Vue.component('circle-medium-icon', CircleMediumIcon);
Vue.component('alert-circle-icon', AlertCircleIcon);
Vue.component('refresh-icon', RefreshIcon);
Vue.component('check-all-icon', CheckAllIcon);
Vue.component('check-bold-icon', CheckBoldIcon);
Vue.component('close-icon', CloseIcon);
Vue.component('pencil-icon', PencilIcon);
Vue.component('chevron-down-icon', ChevronDownIcon);
Vue.component('chevron-right-icon', ChevronRightIcon);
Vue.component('chevron-left-icon', ChevronLeftIcon);
Vue.component('link-icon', LinkIcon);
