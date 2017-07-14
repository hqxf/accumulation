import Vue from "vue"
import Loading from './loading.vue'
const loading = {
	install(Vue){
		Vue.component("Loading",Loading)
	}
}
export default loading