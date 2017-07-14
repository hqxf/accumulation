import Vue from 'vue'
import App from './App.vue'
import loading from './components/loading'
import store from './components/store/store'
Vue.use(loading)
Vue.use(store)
new Vue({
  store,
  loading,
  el: '#app',
  render: h => h(App)
})
