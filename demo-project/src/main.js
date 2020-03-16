import Vue from 'vue'
import App from './App.vue'
import FirstComponent from './components/First.vue'
import ComponentTourPackage from './components/TourPackage.vue'

Vue.component('component-a',FirstComponent)
Vue.component('component-tour',ComponentTourPackage)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#root')
