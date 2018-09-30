import '@babel/polyfill'
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import './plugins/vuetify'
import App from './App'
import router from './router'

Vue.config.productionTip = false

const event = function event(Vue) {
  Vue.prototype.$eventBus = Vue.$eventBus = new Vue();
};

Vue.use(event);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
