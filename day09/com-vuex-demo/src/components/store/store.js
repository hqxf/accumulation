import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
var state = {
	count:10
}
const actions = {
	add:({commit})=>{
		commit('add')
	},
	rec:({commit})=>{
		commit("rec")
	},
	isOdd:({commit,state})=>{
		if(state.count%2==0){
			commit("rec")
		}
	}
}
const mutations = {
	add(state){
		state.count++
	},
	rec(state){
		state.count--
	}
}
const getters = {
	count(state){
		return state.count
	},
	getOdd(state){
		return state.count%2==0?"偶数":"奇数"
	}
}
export default new Vuex.Store({
	state,
	actions,
	mutations,
	getters
})