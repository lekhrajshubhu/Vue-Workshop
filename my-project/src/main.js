import Vue from 'vue' // node_modules
import App from './App.vue' // relative path 
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import vueRouter from 'vue-router'
import axios from 'axios'
import routes from './routes'

Vue.use(vueRouter)
Vue.prototype.$axios = axios;

const router  = new vueRouter({
  mode:'history',
  routes,
});
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),

}).$mount('#root')
