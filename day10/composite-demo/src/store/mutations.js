import {add,rec,sync,changeAct} from './types'
import actions from './actions'
import getters from './getters'
const state = {
	count: 10,
	isAct1: true,
	isAct2: false,
	isAct3: false
}
const mutations = {
	[add](state){
		state.count++;
	},
	[rec](state){
		state.count--;
	},
	[sync](state){
		new Promise((resolve)=>{
			setTimeout(()=>{
				alert(1)
			},2000)
		})
	}
}
export default {
	state,
	mutations,
	actions,
	getters
}