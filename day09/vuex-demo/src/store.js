import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
var state = {
	count:10
}
const mutations = {
	add1(state){//处理数据的变化、、状态
		state.count++;
	},
	rec1(state){
		if(state.count<-3){
			return void 666;
		}
		state.count--;
	},
	gb(state){
		console.log(state.count);
	}
}
const actions = {
	add:({//处理你要干什么，异步请求，判断，里程控制
		commit
	})=>{
		commit('add1')
	},
	rec:({
		commit
	})=>{
		commit("rec1")
	},
	oddClick:({
		commit
	})=>{
		commit('gb')
	},
	clk:({
		commit,
		state
	})=>{
		if(state.count%2==0){
			commit('rec1');
		}
	},
	asyncL:({
		commit
	})=>{
		new Promise((resolve)=>{
			setTimeout(function(){
				commit("rec1");
				resolve();
			},1000)
		})
	}
}
const getters = {
	count(state){
		return state.count
	},
	gg(state){
		return state.count%2==0;
	},
	getOdd(state){
		return state.count%2==0?"偶数":"奇数";
	}
}
export default new Vuex.Store({
	actions,
	state,
	mutations,
	getters
})