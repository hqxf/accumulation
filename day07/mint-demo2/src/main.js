import Vue from 'vue'
import App from './App.vue'
import MintUi from 'mint-ui'
import '../node_modules/mint-ui/lib/style.min.css'
Vue.use(MintUi)
new Vue({
  el: '#app',
  render: h => h(App)
})
