// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vueResource from 'vue-resource';
import axios from 'axios';
import BootstrapVue from 'bootstrap-vue';

Vue.use(BootstrapVue);
Vue.use(vueResource);

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Vue.http.headers.common['Authorization'] = 'Basic YXBpOnBhc3N3b3Jk'
// // Vue.http.headers.common['Access-Control-Allow-Origin'] = 'http://localhost:3000'
// // Vue.http.headers.common['Access-Control-Request-Method'] = '*'


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
