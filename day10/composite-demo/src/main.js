import Vue from 'vue'
import App from './App.vue'
import loading from './components/loading'
import store from './store'
import axios from 'axios'
import filters from './filters'
console.log(filters);
Object.keys(filters).forEach(key => Vue.filter(key, filters[key]))
// Object.keys(filters).forEach((key)=>Vue.filter(key,filters[key]))
Vue.use(loading)
Vue.use(store)
Vue.prototype.$http = axios;
new Vue({
  loading,
  store,
  el: '#app',
  render: h => h(App)
})
