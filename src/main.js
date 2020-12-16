import Vue from 'vue'
import App from './App.vue'
import 'boxicons';

import './scss/base.scss';

import VueScrollReveal from 'vue-scroll-reveal';


Vue.use(VueScrollReveal);


Vue.use(VueScrollReveal, {
  class: 'v-scroll-reveal',
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
