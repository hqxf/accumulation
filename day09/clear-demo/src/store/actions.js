import {add,rec} from './types'
export default{
	add:({commit})=>{
		commit(add)
	},
	rec:({commit})=>{
		commit(rec)
	},
	isOdd:({commit,state})=>{
		if(state.count%2==0){
			commit(rec)
		}
	}
}