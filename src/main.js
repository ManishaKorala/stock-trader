import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
import router from './routes'
import store from './store/store';

Vue.use(VueResource);

Vue.http.options.root = 'https://vuejs-stock-trader-6a505.firebaseio.com/';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
