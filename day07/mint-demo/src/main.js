import Vue from 'vue'
import App from './App.vue'
import Mint from 'mint-ui'
import '../node_modules/mint-ui/lib/style.min.css'
Vue.use(Mint);
new Vue({
  el: '#app',
  render: h => h(App)
})
