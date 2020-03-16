import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
// import Axios from 'axios'
Vue.use(VueRouter);
// Vue.prototype.$axios = Axios;

import routes from './routes'
import 'bootstrap/dist/css/bootstrap.min.css'

import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";

const router = new VueRouter({
  routes
});

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
