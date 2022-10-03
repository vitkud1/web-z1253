import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import BalmUI from 'balm-ui'
import BalmUIPlus from 'balm-ui/dist/balm-ui-plus';

import 'balm-ui-css';

createApp(App).use(router).use(BalmUI).use(BalmUIPlus).mount('#app')
