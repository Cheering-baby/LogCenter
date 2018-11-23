import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { Loading, Message, MessageBox } from 'element-ui'


Vue.prototype.$loading = Loading.service;
Vue.prototype.$message = Message;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
