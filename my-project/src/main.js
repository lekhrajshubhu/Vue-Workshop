import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
// import Axios from 'axios'
Vue.use(VueRouter);
Vue.use(Vuex);
// Vue.prototype.$axios = Axios;


import routes from './routes'
import 'bootstrap/dist/css/bootstrap.min.css'

import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";

import CustomButton from './components/button/CustomButton'
import ButtonPrimary from './components/button/ButtonPrimary'
Vue.component('custom-button',CustomButton);
Vue.component('button-primary',ButtonPrimary);

const router = new VueRouter({
  routes
});



const store = new Vuex.Store({
  
  state : { // data single source of truth
    name:'test name',
    firstname:'lekhraj',
    lastname:'rai',

  },
  mutations: { //method to update the state
    UPDATE_NAME(state) {
      state.name = "change name"
    }
  },
  getters: {
    formattedName(state) {
      return state.name.toUpperCase();
    }
  }

});
console.log(store);


setTimeout(() => {
  store.commit('UPDATE_NAME');
}, 2000);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

