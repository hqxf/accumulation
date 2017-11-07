import Vue from 'vue'
import App from './App.vue'
import loading from './loading'
import store from './store'
Vue.use(loading)
Vue.use(store)
new Vue({
  loading,
  store,
  el: '#app',
  render: h => h(App)
})
