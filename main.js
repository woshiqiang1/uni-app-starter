import App from './App'
import store from './store'
import { toast } from './utils/toast'
import uvUI from '@/uni_modules/uv-ui-tools'

// #ifndef VUE3
import Vue from 'vue'

Vue.config.productionTip = false
Vue.prototype.$store = store
Vue.prototype.$toast = toast
Vue.use(uvUI)

App.mpType = 'app'
const app = new Vue({
	store,
	...App
})
app.$mount()
// #endif
