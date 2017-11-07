import getters from './getters'
import actions from './actions'
import {add,rec} from './types'
let state = {
	count:10
}
const mutations = {
	[add](state){
		state.count++;
	},
	[rec](state){
		state.count--;
	}
}
export default{
	state,
	mutations,
	getters,
	actions
}