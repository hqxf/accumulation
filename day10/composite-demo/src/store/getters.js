export default {
	count(state){
		return state.count;
	},
	isShow(state){
		return state.count%2==0?false:true
	},
	getOdd(state){
		return state.count%2==0?"偶数":"奇数"
	},
	isAct1(state){
		return state.isAct1
	},
	isAct2(state){
		return state.isAct2
	},
	isAct3(state){
		return state.isAct3
	}
}